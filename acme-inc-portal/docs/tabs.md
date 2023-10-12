## Page with tabs

### Code tabs

{% tabs %}
```javascript
console.log('tabs');
```

```php
var_dump($tabs);
```
{% /tabs %}


### Content tabs

{% tabs %}

{% tab label="Warning" %}
  Any content could be here.
  {% admonition type="warning" name="Warning" %}
  This is a **Warning** message
  {% /admonition %}
{% /tab %}

{% tab label="Success" %}
  {% admonition type="success" name="Success" %}
  This is a **Success** message
  {% /admonition %}
{% /tab %}

{% tab label="Attention" %}
  {% admonition type="attention" name="Attention" %}
  This is an **Attention** message
  {% /admonition %}
{% /tab %}

{% /tabs %}