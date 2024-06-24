---
layout: post.liquid
title: Python Mocking 101
tags:
  - blog
  - coding
---

[Python Mocking 101: Fake it before you make it](https://www.fugue.co/blog/2016-02-11-python-mocking-101)

```
@patch("module.mock_function")
def test_thing(..., mock_call):
    mock_call.return_value = {"foo": "bar"}

    module.mock_function(a, b, c)

    mock_call.assert_called_once_with(a, b, c)
```
