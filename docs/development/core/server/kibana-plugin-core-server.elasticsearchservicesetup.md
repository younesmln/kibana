<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-server](./kibana-plugin-core-server.md) &gt; [ElasticsearchServiceSetup](./kibana-plugin-core-server.elasticsearchservicesetup.md)

## ElasticsearchServiceSetup interface


<b>Signature:</b>

```typescript
export interface ElasticsearchServiceSetup 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [legacy](./kibana-plugin-core-server.elasticsearchservicesetup.legacy.md) | { readonly config$: Observable&lt;ElasticsearchConfig&gt;; } |  |
|  [setUnauthorizedErrorHandler](./kibana-plugin-core-server.elasticsearchservicesetup.setunauthorizederrorhandler.md) | (handler: UnauthorizedErrorHandler) =&gt; void | Register a handler that will be called when unauthorized (401) errors are returned from any API call to elasticsearch performed on behalf of a user via a [scoped cluster client](./kibana-plugin-core-server.iscopedclusterclient.md)<!-- -->. |

