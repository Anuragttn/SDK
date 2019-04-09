# AtomApi::SpecificModelTransactionResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | ID of the model transaction | [optional] 
**create_date** | **String** | Datetime the model transaction was created | [optional] 
**shares** | **Float** | Number of shares of the security purchased as part of the transaction | 
**price** | **Float** | Security price at which the shares were purchased as part of the transaction | 
**date** | **Date** | Date of the transaction | 
**model_id** | **String** | The ID of the model that the transaction record falls under | 
**security_id** | **String** | The ID of the security included in the transaction | 
**transaction_code_id** | **Integer** | The ID referring to the transaction codes defined by your firm | 
**secondary_id** | [**SecondaryId**](SecondaryId.md) |  | [optional] 
**update_date** | **String** | Datetime the model transaction was last updated | [optional] 

