# blip

Small library for fetching graphql definitions and interactiong with graphql server.

# Installation

Add the following dependency to your project.clj file

# Usage

```clj
(:require [blip.core :as core])
```

###### Define init function

Use init function to get your actual query function and setup endpoint for making requests: 

```clj
(:require [blip.core :as blip])
```

```clj
(def graphql-request 
	(blip/init 
		"http://qeryedpoint/my-query.graphql" ;; can be a local filename or remote URI
		{:endpoint "http://queryendpoint" ;; your query endpoint
		 :post-headers {"Content-Type" ..} ;; "post headers to use in POST requests, eq actuall query/mutation requests"
		 :get-headers {"Accept" "text/html, .."} ;; "get headers to use in GET requests, eq when fetching graphql schema from graphql server"
		 })
```

<sub>Note: you don't need to provide get headers when your endpont is a local file.</sub>

###### Execute query

```clj
(graphql-request "query-name" {:id "some-id"}) 
```

If you want to see list all query names and functions, you can simply call `blip/load-queries` with your resource handle and get-headers (in case graphql resource is hosted on remote server and it's not a local file).

```clj
(blip/load queries "http://queryendpont/my-query.graphql" {"Accept" "text/html"})) ;; 
```


## Site 

If your graphql server is a [site](https://github.com/juxt/site), you can use 

```clj
(:require [blip.site :as blip-site])

```
###### Define init function

The `site/init` function takes graphql resource handle as a first argument and map containing query endpoint for making requests, and site authorization map to specify site authorization.

```clj
(def graphql-request
 (blip-site/init
	"http://qeryedpoint/my-query.graphql" ;; can be a local filename or remote URI"
	{:endpont "http://queryendpoint" ;; your query endpoint
	 :site-auth {:endpoint "http://siteendpoint/_site/token" ;; site endpoint to retrieve a token
                 :username "username" }}))
	             :pass "pass"
```

###### Execute query

```clj

(graphql-request "query-name" {:id "some-id"}) 

```

## License

Copyright © 2022 JUXT

Distributed under the Eclipse Public License version 1.0.
