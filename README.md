# Nyaya blip fork

Small library for fetching graphql definitions and interactiong with graphql server.

## Sync with upstream changes

    git remote add upstream git@github.com:juxt/blip.git
    git fetch upstream
    git rebase upstream/main

# Installation

Add the following dependency to your deps.edn file

```clj
juxt/blip {:git/url "git@github.com:juxt/blip.git"
           :git/sha "4e01a2db41f33b758bfba5af88f17e7dc9e795c0"} ;; the lastest commit you want to use
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
