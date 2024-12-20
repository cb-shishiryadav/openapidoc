---
stoplight-id: upohpgnjav634
---

# Authorization

<Note>
  This guide explains how to Authorize API endpoints associated with Service Adapter.
</Note>

Chargebee uses HTTP header-based authorization for all the API endpoints associated with Service Adapter. We dynamically pass this authorization key in the HTTP header. The parameter that holds this key is found in the JSON object api_configuration required for configuring your onboarding on Chargebee's marketplace. In the api_configuration object, our Taxes Service Adapter SPI checks the authorization key parameter from credential_configuration.id and creates the HTTP header-based input query parameter for authorization. The credential_configuration is an array of objects with an id attribute, and the value of id is the parameter containing the authorization key.

Following are the JSON snippets for your reference.

```json json_schema
{
  "api_configuration": {
       "api_base_url": "https://xyz.abc.com/chargebee",
       "credential_configuration": [ 
         {
           "id":"authorization_key",
           "name": "Authorization Key", 
           "type": "text",
           "is_sensitive": true 
         },
         {
           "id": "client_secret",
           "name": "Client Secret",
           "type": "text",
           "is_sensitive": true
         }
       ]
     }
}
```
