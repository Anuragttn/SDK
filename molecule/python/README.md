# hydrogen_molecule_api
The Hydrogen Molecule API

Full documentation: [Molecule](https://www.hydrogenplatform.com/docs/molecule/v1/)

This Python package is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.PythonClientCodegen
- For more information, please visit [https://www.hydrogenplatform.com/contact](https://www.hydrogenplatform.com/contact)

## Requirements.

Python 2.7 and 3.4+

## Installation & Usage

*Recommended: Use a virtualenv (or conda env) for installation and usage of the package*

```sh
virtualenv molecule-api
source molecule-api/bin/activate
```

### pip install

If the python package is hosted on Github, you can install directly from Github

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import molecule_api
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import molecule_api
```

## Getting Started

Full usage documentation is available: [Nucleus](https://www.hydrogenplatform.com/docs/nucleus/v1/) | [Electron](https://www.hydrogenplatform.com/docs/electron/v1/) | [Proton](https://www.hydrogenplatform.com/docs/proton/v1/)

Please follow the [installation procedure](#installation--usage) and then run the following:

```python
from __future__ import print_function
import time
import molecule_api
from molecule_api.rest import ApiException
from pprint import pprint

# Initialize configuration
configuration = molecule_api.Configuration()

# Set the environment (optional, defaults to sandbox)
# This changes the URL for requests (including OAuth) to [environment].hydrogenplatform.com
configuration.set_environment("sandbox")


# Configure OAuth2 access token for authorization: oauth
# Method 1: Fetch and set access token with client_id and client_secret
configuration.access_token = configuration.get_oauth_token('MYCLIENTID', 'MYCLIENTSECRET')
# Method 2: Set access token using an existing token
configuration.access_token = 'MYACCESSTOKEN'

# create an instance of the API class
api_instance = molecule_api.MoleculeApi(molecule_api.ApiClient(configuration))
token_id = 'token_id_example' # str | UUID of a token

try:
    # Delete a token
    api_instance.delete_token(token_id)
except ApiException as e:
    print("Exception when calling MoleculeApi->delete_token: %s\n" % e)

```

## Documentation for API Endpoints

Full usage documentation is available: [Nucleus](https://www.hydrogenplatform.com/docs/nucleus/v1/) | [Electron](https://www.hydrogenplatform.com/docs/electron/v1/) | [Proton](https://www.hydrogenplatform.com/docs/proton/v1/)

All URIs are relative to *https://api.hydrogenplatform.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MoleculeApi* | [**delete_token**](docs/MoleculeApi.md#delete_token) | **DELETE** /molecule/v1/token/{token_id}/ | Delete a token
*MoleculeApi* | [**get_currency_balance**](docs/MoleculeApi.md#get_currency_balance) | **GET** /molecule/v1/currency_balance/{currency_balance_id} | Retrieve a currency balance
*MoleculeApi* | [**get_currency_balances**](docs/MoleculeApi.md#get_currency_balances) | **GET** /molecule/v1/currency_balance | Get information for all currency balances defined for your application.
*MoleculeApi* | [**get_token**](docs/MoleculeApi.md#get_token) | **GET** /molecule/v1/token/{token_id}/ | Retrieve a token
*MoleculeApi* | [**get_token_balance**](docs/MoleculeApi.md#get_token_balance) | **GET** /molecule/v1/token_balance/{token_balance_id} | Retrieve a token balance
*MoleculeApi* | [**get_token_balances**](docs/MoleculeApi.md#get_token_balances) | **GET** /molecule/v1/token_balance | Get information for all token balances defined for your application.
*MoleculeApi* | [**get_token_supplies**](docs/MoleculeApi.md#get_token_supplies) | **GET** /molecule/v1/token_supply | Get information for all token supplies defined for your application.
*MoleculeApi* | [**get_token_supply**](docs/MoleculeApi.md#get_token_supply) | **GET** /molecule/v1/token_supply/{token_supply_id} | Retrieve a token supply
*MoleculeApi* | [**get_tokens**](docs/MoleculeApi.md#get_tokens) | **GET** /molecule/v1/token | Get information for all tokens defined for your firm
*MoleculeApi* | [**get_wallet**](docs/MoleculeApi.md#get_wallet) | **GET** /molecule/v1/wallet/{wallet_id}/ | Retrieve a wallet
*MoleculeApi* | [**get_wallet_key**](docs/MoleculeApi.md#get_wallet_key) | **GET** /molecule/v1/wallet_key/{wallet_key_id}/ | Retrieve a wallet key
*MoleculeApi* | [**get_wallet_keys**](docs/MoleculeApi.md#get_wallet_keys) | **GET** /molecule/v1/wallet_key | Get all wallet keys associated with wallets defined for your firm.
*MoleculeApi* | [**get_wallets**](docs/MoleculeApi.md#get_wallets) | **GET** /molecule/v1/wallet | Get information for all wallets defined for your firm
*MoleculeApi* | [**post_token**](docs/MoleculeApi.md#post_token) | **POST** /molecule/v1/token | Create a token under your firm.
*MoleculeApi* | [**post_token_crowdsale**](docs/MoleculeApi.md#post_token_crowdsale) | **POST** /molecule/v1/token/crowdsale | Transfer tokens to a token&#39;s crowdsale address.
*MoleculeApi* | [**post_token_deploy**](docs/MoleculeApi.md#post_token_deploy) | **POST** /molecule/v1/token/deploy | Deploy a secuirty token contract and its crowdsale contract to blockchain.
*MoleculeApi* | [**post_token_purchase**](docs/MoleculeApi.md#post_token_purchase) | **POST** /molecule/v1/token/purchase | Participate in a token&#39;s crowdsale and purchase tokens.
*MoleculeApi* | [**post_token_whitelist**](docs/MoleculeApi.md#post_token_whitelist) | **POST** /molecule/v1/token/whitelist | Add an investor to a token&#39;s whitelist
*MoleculeApi* | [**post_wallet**](docs/MoleculeApi.md#post_wallet) | **POST** /molecule/v1/wallet | Create a wallet under your firm.
*MoleculeApi* | [**post_wallet_key**](docs/MoleculeApi.md#post_wallet_key) | **POST** /molecule/v1/wallet_key | Associate an existing key pair with a wallet defined for your firm.
*MoleculeApi* | [**post_wallet_key_generator**](docs/MoleculeApi.md#post_wallet_key_generator) | **POST** /molecule/v1/wallet_key/generator | Generate a wallet key using the Key Service and associate with a wallet defined for your firm.
*MoleculeApi* | [**update_token**](docs/MoleculeApi.md#update_token) | **PUT** /molecule/v1/token/{token_id}/ | Update a token
*MoleculeApi* | [**update_wallet**](docs/MoleculeApi.md#update_wallet) | **PUT** /molecule/v1/wallet/{wallet_id}/ | Update a wallet


## Documentation For Models

 - [CurrencyBalanceSpecificResponse](docs/CurrencyBalanceSpecificResponse.md)
 - [OfferingSettingsCreatePayload](docs/OfferingSettingsCreatePayload.md)
 - [OfferingSettingsUpdatePayload](docs/OfferingSettingsUpdatePayload.md)
 - [Pagination](docs/Pagination.md)
 - [PaginationSort](docs/PaginationSort.md)
 - [SecondaryId](docs/SecondaryId.md)
 - [TokenBalanceSpecificResponse](docs/TokenBalanceSpecificResponse.md)
 - [TokenCreatePayload](docs/TokenCreatePayload.md)
 - [TokenCrowdsalePayload](docs/TokenCrowdsalePayload.md)
 - [TokenDeployPayload](docs/TokenDeployPayload.md)
 - [TokenPurchasePayload](docs/TokenPurchasePayload.md)
 - [TokenRestrictionsPayload](docs/TokenRestrictionsPayload.md)
 - [TokenSupplySpecificResponse](docs/TokenSupplySpecificResponse.md)
 - [TokenUpdatePayload](docs/TokenUpdatePayload.md)
 - [TokenWhitelistPayload](docs/TokenWhitelistPayload.md)
 - [WalletCreateClient](docs/WalletCreateClient.md)
 - [WalletCreatePayload](docs/WalletCreatePayload.md)
 - [WalletCreateWhitelist](docs/WalletCreateWhitelist.md)
 - [WalletKeyCreatePayload](docs/WalletKeyCreatePayload.md)
 - [WalletKeyCreateResponse](docs/WalletKeyCreateResponse.md)
 - [WalletKeyGeneratorPayload](docs/WalletKeyGeneratorPayload.md)
 - [WalletUpdatePayload](docs/WalletUpdatePayload.md)
 - [CurrencyBalanceGetResponse](docs/CurrencyBalanceGetResponse.md)
 - [TokenBalanceGetResponse](docs/TokenBalanceGetResponse.md)
 - [TokenCreateResponse](docs/TokenCreateResponse.md)
 - [TokenGetResponse](docs/TokenGetResponse.md)
 - [TokenSupplyGetResponse](docs/TokenSupplyGetResponse.md)
 - [WalletCreateResponse](docs/WalletCreateResponse.md)
 - [WalletGetResponse](docs/WalletGetResponse.md)
 - [WalletKeyGetResponse](docs/WalletKeyGetResponse.md)
 - [WalletKeySpecificResponse](docs/WalletKeySpecificResponse.md)
 - [TokenSpecificResponse](docs/TokenSpecificResponse.md)
 - [WalletSpecificResponse](docs/WalletSpecificResponse.md)


## Documentation For Authorization

Please see [this page](https://www.hydrogenplatform.com/docs/nucleus/v1/#Authentication) for additional authorization information.


## oauth

- **Type**: OAuth
- **Flow**: application
- **Token URL**: https://api.hydrogenplatform.com/authorization/v1/oauth/token?grant_type=client_credentials


## Author

[https://www.hydrogenplatform.com/](https://www.hydrogenplatform.com/)