JIRA Instant Search for Speakeasy
======================
Simply adds instant search to the JIRA search page. Simple. 

An entry into (Codegeist)[http://codegeist.atlassian.com/]


Supported Products
------------------
* [JIRA](http://www.atlassian.com/software/jira/)


Installation Instructions
-------------------------

1. Install [Speakeasy](http://confluence.atlassian.com/display/DEVNET/Speakeasy+Install+Guide)
2. Download [jira-instant.zip](https://github.com/downloads/jonmort/jira-instant/jira-instant.zip) or 

    Clone this project and create a zip 

         git clone git://github.com/jonmort/jira-instant.git
    
         cd jira-instant/speakeasy
         zip -r jira-instant.zip * 
         
4. Upload `jira-instant.zip` to the Extensions page of speakeasy



Development
-----------

The following commands are useful (assuming that the [Atlassian Plugin SDK](http://confluence.atlassian.com/display/DEVNET/Developing+your+Plugin+using+the+Atlassian+Plugin+SDK) is installed.

     $ atlas-run-standalone --plugins com.atlassian.labs:speakeasy-plugin:0.9.2 --product jira 
     $ cd speakeasy
     $ rm ../jira-instant.zip && \
        zip -r ../jira-instant.zip * -x README.markdown && \
        curl -uadmin:admin -F plugin-file=@../jira-instant.zip http://localhost:2990/jira/rest/speakeasy/1/plugins
