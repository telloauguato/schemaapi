# Schema API

## What's this?

_Schema API_ is a modular api, construct by a file json with a schema.

We always use the keys by default: _name_ and _key_

## Body

The schema body requires the key _content_. This key will be responsible for building your API data. 

## Types

### Name

```json
{ 
"type" : "name", 
"key" : "name" 
} 
```

This returns:

```json
{
"name" : "Sherlock Holmes"
}
```
