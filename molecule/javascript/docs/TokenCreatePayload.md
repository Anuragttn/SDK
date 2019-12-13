# molecule_api.TokenCreatePayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **String** | The symbol of the security token. Could be 3 or 4 characters long. | 
**name** | **String** | Name of the security token. | 
**nucleusModelId** | **String** | The id of the associated Nucleus model for this security token | 
**ownerWalletId** | **String** | The wallet id of the token owner. This wallet has the privileges to do on-chain modifications | 
**totalSupply** | **Number** | The total supply of the security token | 
**circulatingSupply** | **Number** | The amount of tokens in circulation. Defaults to 0 | [optional] 
**conractAddress** | **String** | The contract address of the security token on the Ethereum blockchain | [optional] 
**crowdsaleAddress** | **String** | The crowdsale address of the security token on the Ethereum blockchain | [optional] 
**restrictions** | [**TokenRestrictionsPayload**](TokenRestrictionsPayload.md) |  | [optional] 
**offeringSettings** | [**OfferingSettingsCreatePayload**](OfferingSettingsCreatePayload.md) |  | [optional] 
**metadata** | **Object** | Custom information associated with the account in the format key:value | [optional] 
**secondaryId** | [**SecondaryId**](SecondaryId.md) |  | [optional] 

