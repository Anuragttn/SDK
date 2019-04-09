
# ClientResponsePayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answerId** | [**UUID**](UUID.md) | The ID of the answer provided to link the response to a question | 
**answerValue** | **String** | Body of the client’s response | 
**clientId** | [**UUID**](UUID.md) | The ID of the client to whom the response belongs |  [optional]
**accountId** | [**UUID**](UUID.md) | In the case that the response applies to only one of a client’s accounts and not the client as a whole, the ID of the account to which the response belongs |  [optional]
**secondaryId** | **String** |  |  [optional]


