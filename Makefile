.PHONY: *

list:
	@grep -E '^[a-zA-Z%_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

demo:
	npm install

tailwind-build:
	@npm run tailwind-build

tailwind-watch:
	@npm run tailwind-watch