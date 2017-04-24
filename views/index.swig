<!DOCTYPE html>
<html>
<head>
  <title>就是个测试</title>
  <script>
    window.__INITIAL_STATE__ = {% autoescape false %}{{ state| json }}{% endautoescape %}
  </script>
</head>
<body>
  <div id="root">{% autoescape false %}{{ root }}{% endautoescape %}</div>
  <script src="/dist/bundle.js"></script>
</body>
</html>