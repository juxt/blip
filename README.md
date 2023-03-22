# Blip

Small library for fetching GraphQL definitions and interacting with a GraphQL server.

# Installation

Add the following dependency to your deps.edn file. Please check if the tag release number is the latest:

```clj
juxt/blip {:git/url "git@github.com:juxt/blip.git"
	   :git/tag "0.1"} ;; the release tag number to use
```

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
		"http://queryedpoint/my-query.graphql" ;; can be a local filename or remote URI
		"http://queryendpoint" ;; your graphql server endpoint
		 {:headers {"Content-Type" ..
	               "Accept" "text/html, .."} ;; "headers to use in requests, eq actuall query/mutation requests"
		 })
```

You can also use the `:debug` option (set it to `true`) to see what queries Blip is ingesting.

###### Execute query

```clj
(graphql-request "query-name" {:id "some-id"})
```

If you want to see list all query names and functions, you can simply call `blip/load-queries` with your resource handle and headers (in case graphql resource is hosted on remote server and it's not a local file).

```clj
(blip/load queries "http://queryendpont/my-query.graphql" {:headers {"Accept" "text/html"}})) ;;
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
	 "http://queryedpoint/my-query.graphql" ;; can be a local filename or remote URI"
	 "http://queryendpoint" ;; your graphql server endpoint
	 {:site-auth {:endpoint "http://siteendpoint/_site/token" ;; site endpoint to retrieve a token
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
