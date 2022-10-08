/*
3.	You're building a single page application that has a <table> of different financial metrics about a property, 
    dropdowns that filter the data client-side, and the ability to drill down from aggregate to more detailed views of the data.

    a.	Test: Mock up a generic state tracking framework in JavaScript (or pseudocode) that:
    i.	Tracks the state of dropdown filters
    ii.	Tracks drilldown state and activation / entry context
    iii. Tracks and displays intra-drilldown traversal (drilldown within drilldown) state as breadcrumbs
    iv.	Manages URL updates with every state change, so that the user can use the Back and Forward buttons in their 
    browser to traverse report states, as well as share a link to the specific view state on the page (parameters, filters, drill-down, etc).
    
    b.	Note: Do not force a reload of the page, route, partials, etc. when the state changes; assume that all relevant 
    data is retrieved on page load, or is retrieved asynchronously on certain user events such as drilldown. Your goal should 
    be to mock the kind of objects and functions necessary to track every aspect of the user’s specific view state.
*/

/*
Question:  How would we keep track of the User's State in JavaScript?
By definition, HTML has no state. 

The Generic State for the breadcrumbs would be made as a tree
The JavaScript code would functionally traverse the tree in order to access different states.
The actual

Which would be a more efficient implementation to traverse and manipulate the tree structure of the DOM elements?
If we access the DOM elements or Parallel Structure in JavaScript.
Access the DOM elements for maintainability reasons.
    - We can lose synchronization between the DOM elements and JS
    - This can happen by adding an element to the DOM alone
    - It's best to access the DOM elements for the representation of the tree
    - We will use the functions of JS to traverse the DOM tree

Create the dropdowns with breadcrumbs in DOM
    <ul class="breadcrumb">
        <li><a id="home" href="#">Home</a></li>
        <li><a id="picture" href="#">Pictures</a></li>
        <li><a id="summer" href="#">Summer 15</a></li>
        <li>Italy</li>
    </ul>

    Take the first level li's
    Top-down left-right traversal
    In-order Traversal  == Data Structure
    In this traversal method, the left subtree is visited first, then the root and later the right sub-tree. 
    We should always remember that every node may represent a subtree itself.
    If a binary tree is traversed in-order, the output will produce sorted key values in an ascending order.

    ANSWER: What it comes down to it's this Data Structure in PseudoCode
    Root == <ul>
        Children == <li></li>
        Descendants == Additional <ul> with <li> with <a>

https://www.tutorialspoint.com/data_structures_algorithms/tree_traversal.htm#:~:text=In%20this%20traversal%20method%2C%20the,values%20in%20an%20ascending%20order.


    Create a list and adding elements to the list with appropriate CSS Formating
    https://www.w3schools.com/howto/howto_css_breadcrumbs.asp
    
    With the anchor links, we can update the URL with the deepested nested anchor tag.
    That deepest anchor will define the rest of the breadcrumbs traversing upwards


    1. Accessing the element in the DOM like getElementById or quereySelector
    2. Once we access, we use a function to traverse from the descendant nodes to the root node
    3. Make the elements in the path visible from each low level Node specified in the URL

    In-order Traversal - From Bottom to Top
    #D -> #B -> #A
    #G -> #C -> #A

    
*/


// 1. Don't Reinvent the wheel -- Search for things that have been done previously
// 2. Learn something new everyday