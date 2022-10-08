using System;
using System.Data;
using System.ComponentModel;
using System.Reflection;
/*
* Question 4:
* Objective -- Write a C# Function that converts a list of any object type to a DataTable
*/

namespace HelloWorld
{
    public class Hello
    {
        static void Main(string[] args)
        {

            // List of Employees
            List<Employee> emp = new List<Employee>(){
                new Employee{
                    Name = "Sean",
                    Age = 25,
                    EmployeeId = 1110
                },
                new Employee{
                    Name = "Dave",
                    Age = 35,
                    EmployeeId = 1100
                },
                new Employee{
                    Name = "Jim",
                    Age = 45,
                    EmployeeId = 1200
                }
            };
            Console.WriteLine("about to call converter");
            DataTable dataTable = ConvertToDataTable<Employee>(emp);

            // Goes through each row
            foreach (DataRow row in dataTable.Rows)
            {
                object[]values = row.ItemArray;

                // Go through each column
                foreach (object val in values)
                {
                    Console.Write(val +" - ");
                }
                Console.WriteLine("");
            }


            // Console.WriteLine(dataTable.Rows[1][1].ToString());
            // Console.WriteLine(dataTable.Rows[2][2].ToString());
            Console.WriteLine("DONE");
        }

        // Convert objs to the DataTable
        public static DataTable ConvertToDataTable<T>(List<T> emp)
        {
            // Collection of Property to be constructed
            PropertyDescriptorCollection properties = TypeDescriptor.GetProperties(typeof(T));
            DataTable dt = new DataTable();

            Type myType = emp[0].GetType();
            PropertyInfo[] props = myType.GetProperties();

            foreach (PropertyInfo prop in props)
            {
                object propValue = prop.GetValue(emp[0]);
            }

            // 
            foreach (PropertyDescriptor prop in properties)
            {
                dt.Columns.Add(prop.Name, Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType);
            }

            // go through List for each value in each row
            foreach (var item in emp)
            {
               // Console.WriteLine(item);

                DataRow dr = dt.NewRow();
                foreach (PropertyDescriptor prop in properties)
                {
                    dr[prop.Name] = prop.GetValue(item) ?? DBNull.Value;
                }
                dt.Rows.Add(dr);
            }

            return dt;
        }

    }

    // Object of Interest the Employee
    public class Employee
    {

        // Properties
        public string Name
        {
            get;
            set;
        }
        public int Age
        {
            get;
            set;
        }
        public int EmployeeId
        {
            get;
            set;
        }

        override
        public String ToString()
        {
            return String.Format("{0} - {1} - {2}", Name, Age, EmployeeId);
        }
    }


}