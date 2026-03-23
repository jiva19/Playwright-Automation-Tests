# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - heading "Hmm. We’re having trouble finding that site." [level=1] [ref=e5]
    - paragraph [ref=e6]:
      - text: We can’t connect to the server at frontend.
      - generic [ref=e7]:
        - text: Did you mean to go to
        - link "www.frontend.com/login" [ref=e8] [cursor=pointer]:
          - /url: https://www.frontend.com/login
        - text: "?"
    - paragraph
    - generic [ref=e9]:
      - strong [ref=e11]: "If you entered the right address, you can:"
      - list [ref=e12]:
        - listitem [ref=e13]: Try again later
        - listitem [ref=e14]: Check your network connection
        - listitem [ref=e15]: Check that Nightly has permission to access the web (you might be connected but behind a firewall)
  - button "Try Again" [active] [ref=e17]
```