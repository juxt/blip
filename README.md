# Blip

Small library for fetching GraphQL definitions and interacting with a GraphQL server for both Clojure and ClojureScript.

## Installation

Add the following dependency to your deps.edn file.

```clj
juxt/blip {:git/url "https://github.com/juxt/blip.git"
           :git/sha "ba6b5357bf679e2bd54da512bfbdd99da41d9616"
           :git/tag "0.2"}
```

# Basic Usage

Use init function to get your actual query function and setup endpoint for making requests:

```clj
(:require [blip.core :as blip])
```

```clj
(def graphql-request
	(blip/init
		"http://endpoint/query.graphql"     ;; It can be a local filename or remote URI
		"http://endpoint"                   ;; Your graphql server endpoint
		 {:headers {"Content-Type" "..."
	              "Accept" "text/html"}   ;; headers to use in requests, if necessary
      :debug false                      ;; Set it to `true` to see debugging messages
		 })
```

## Execute query

```clj
(graphql-request "query-name" {:id "some-id"})
```

If you want to see a list of all the query names and functions, you can call `blip/load-queries` with your resource handle and headers (in case the graphql resource is hosted on a remote server and it's not a local file):

```clj
(blip/load
  queries "http://queryendpont/my-query.graphql"
          {:headers {"Accept" "text/html"}}))
```

## Site

If your graphql server is a [site](https://github.com/juxt/site), you can use

```clj
(:require [blip.site :as blip-site])

```
### Define init function

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

### Execute query

```clj
(graphql-request "query-name" {:id "some-id"})
```

## License

Copyright © 2022 JUXT

Distributed under the Eclipse Public License version 1.0.
