# QA Engineer Assessment Solution

I initially installed the zip file and setup the environment to see how website looks like and functions like. Next I took a look at the example tests and inspected the elements. I immediately noticed that alot of elements did not have id's so I added those. I did that because it makes it easier to find elements on a page and makes the code also cleaner. 

Next I started writing the tests. I split the page objects in search-form, search-person and search-planet. I did used the same structure for the step definitions. I think this makes it clear where you can find your page objects or step definitions. 

The feature files I split in to search-person and search-planet. I used multiple scenario outlines to cover multiple test scenarios. 

In the assignment there was stated that when clearing the search field after having done a search and pushing on the search button then no results should be shown. This is not working properly because when doing this nothing happens. It seems that if no text is added then no search can performed. I tried to fix this but my angular knowledge is not that great :(
