=begin
#Hydrogen Molecule API

#The Hydrogen Molecule API

OpenAPI spec version: 1.0.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.8-SNAPSHOT

=end

require 'spec_helper'
require 'json'

# Unit tests for MoleculeApi::MoleculeApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'MoleculeApi' do
  before do
    # run before each test
    @instance = MoleculeApi::MoleculeApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of MoleculeApi' do
    it 'should create an instance of MoleculeApi' do
      expect(@instance).to be_instance_of(MoleculeApi::MoleculeApi)
    end
  end

  # unit tests for delete_token
  # Delete a token
  # @param token_id UUID of a token
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_token test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_webhook
  # Delete a webhook
  # @param webhook_id UUID of a webhook
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_webhook test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_currencies
  # Get information for all currencies defined for your firm
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @option opts [String] :symbol 
  # @return [CurrencyGetResponse]
  describe 'get_currencies test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_currency
  # Retrieve a currency
  # @param currency_id UUID of a currency
  # @param [Hash] opts the optional parameters
  # @return [CurrencySpecificResponse]
  describe 'get_currency test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_currency_balance
  # Retrieve a currency balance
  # @param currency_balance_id UUID of a currency balance
  # @param [Hash] opts the optional parameters
  # @return [CurrencyBalanceSpecificResponse]
  describe 'get_currency_balance test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_currency_balances
  # Get information for all currency balances recorded in your application.
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @option opts [String] :currency_id Filters results by their currency ids
  # @option opts [String] :wallet_id Filters results by their wallet ids
  # @return [CurrencyBalanceGetResponse]
  describe 'get_currency_balances test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_currency_transfer
  # Retrieve a currency transfer
  # @param currency_transfer_id UUID of a currency transfer
  # @param [Hash] opts the optional parameters
  # @return [CurrencyTransferSpecificResponse]
  describe 'get_currency_transfer test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_currency_transfers
  # Get information for all currency transfers
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @option opts [String] :currency_id Filters results by their currency ids
  # @option opts [String] :wallet_id Filters results by their wallet ids
  # @option opts [String] :sender_wallet_id Filters results by their sender wallet ids
  # @option opts [String] :receiver_wallet_id Filters results by their receiver wallet ids
  # @return [CurrencyTransferGetResponse]
  describe 'get_currency_transfers test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_token
  # Retrieve a token
  # @param token_id UUID of a token
  # @param [Hash] opts the optional parameters
  # @return [TokenSpecificResponse]
  describe 'get_token test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_token_balance
  # Retrieve a token balance
  # @param token_balance_id UUID of a token balance
  # @param [Hash] opts the optional parameters
  # @return [TokenBalanceSpecificResponse]
  describe 'get_token_balance test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_token_balances
  # Get information for all token balances defined for your application.
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @option opts [String] :token_id Filters results by their token ids
  # @option opts [String] :wallet_id Filters results by their wallet ids
  # @return [TokenBalanceGetResponse]
  describe 'get_token_balances test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_token_supplies
  # Get information for all token supplies defined for your application.
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @option opts [String] :token_id Filters results by their token ids
  # @return [TokenSupplyGetResponse]
  describe 'get_token_supplies test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_token_supply
  # Retrieve a token supply
  # @param token_supply_id UUID of a token supply
  # @param [Hash] opts the optional parameters
  # @return [TokenSupplySpecificResponse]
  describe 'get_token_supply test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_token_transfer
  # Retrieve a token transfer
  # @param token_transfer_id UUID of a token transfer
  # @param [Hash] opts the optional parameters
  # @return [TokenTransferSpecificResponse]
  describe 'get_token_transfer test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_token_transfers
  # Get information for all token transfers
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @option opts [String] :token_id Filters results by their token ids
  # @option opts [String] :wallet_id Filters results by their wallet ids
  # @option opts [String] :sender_wallet_id Filters results by their sender wallet ids
  # @option opts [String] :receiver_wallet_id Filters results by their receiver wallet ids
  # @return [TokenTransferGetResponse]
  describe 'get_token_transfers test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_tokens
  # Get information for all tokens defined for your firm
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @return [TokenGetResponse]
  describe 'get_tokens test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_transaction_status
  # Retrieve status information for a specific transaction
  # @param transaction_status_id UUID of a transaction status
  # @param [Hash] opts the optional parameters
  # @return [TransactionStatusSpecificResponse]
  describe 'get_transaction_status test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_transaction_statuses
  # Get status information for all transactions
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @option opts [String] :wallet_id Filters results by their wallet ids
  # @option opts [String] :hash 
  # @option opts [String] :status 
  # @return [TransactionStatusGetResponse]
  describe 'get_transaction_statuses test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_wallet
  # Retrieve a wallet
  # @param wallet_id UUID of a wallet
  # @param [Hash] opts the optional parameters
  # @return [WalletSpecificResponse]
  describe 'get_wallet test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_wallet_key
  # Retrieve a wallet key
  # @param wallet_key_id UUID of a wallet key
  # @param [Hash] opts the optional parameters
  # @return [WalletKeySpecificResponse]
  describe 'get_wallet_key test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_wallet_keys
  # Get all wallet keys associated with wallets defined for your firm.
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @return [WalletKeyGetResponse]
  describe 'get_wallet_keys test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_wallet_permission
  # Retrieve a wallet&#39;s permission
  # @param wallet_id UUID of a wallet
  # @param [Hash] opts the optional parameters
  # @return [WalletPermissionSpecificResponse]
  describe 'get_wallet_permission test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_wallet_permissions
  # Get information for all wallet permisions defined for your firm
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @return [WalletPermissionGetResponse]
  describe 'get_wallet_permissions test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_wallets
  # Get information for all wallets defined for your firm
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @option opts [String] :nucleus_client_id 
  # @option opts [BOOLEAN] :is_primary 
  # @return [WalletGetResponse]
  describe 'get_wallets test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_webhook
  # Retrieve a webhook
  # @param webhook_id UUID of a webhook
  # @param [Hash] opts the optional parameters
  # @return [WebhookSpecificResponse]
  describe 'get_webhook test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_webhooks
  # Get information for all webhooks defined for your firm
  # @param [Hash] opts the optional parameters
  # @option opts [Integer] :page Page number for the page that should be returned as the starting page. For example, if this is specified as 0, then the first page of the results will be the shown, if it is set as 3 then the third page of the results will be shown, and so on. The default is 0
  # @option opts [Integer] :size The number or records to be included per page. The default is 25. There is no max value.
  # @option opts [String] :order_by The field in the response body to order the list by. Default is update_date.
  # @option opts [BOOLEAN] :ascending If true, order the results in ascending order. For an alphabetical result this would be A-Z. If false, order the results in descending order. For an alphabetical result this would be Z-A. Default is false which would order by descending.
  # @option opts [BOOLEAN] :get_latest Retrieves the latest entry
  # @return [WebhookGetResponse]
  describe 'get_webhooks test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_crowdsale_deploy
  # Deploy a token&#39;s crowdsale contract.
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [TransactionStatusSpecificResponse]
  describe 'post_crowdsale_deploy test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_crowdsale_fund
  # Transfer tokens to a token&#39;s crowdsale address.
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [TransactionStatusSpecificResponse]
  describe 'post_crowdsale_fund test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_crowdsale_purchase
  # Purchase tokens from a crowdsale contract
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [TransactionStatusSpecificResponse]
  describe 'post_crowdsale_purchase test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_currency
  # Add a currency under your firm.
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [CurrencyCreateResponse]
  describe 'post_currency test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_currency_balance_update
  # Update the currency balance of a wallet using the blockchain
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [CurrencyBalanceSpecificResponse]
  describe 'post_currency_balance_update test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_currency_transfer
  # Transfer currency between wallets
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [TransactionStatusSpecificResponse]
  describe 'post_currency_transfer test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_token
  # Create a token under your firm.
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [TokenCreateResponse]
  describe 'post_token test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_token_burn
  # Burn existing tokens
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [TransactionStatusSpecificResponse]
  describe 'post_token_burn test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_token_deploy
  # Deploy a security token contract to blockchain.
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [TransactionStatusSpecificResponse]
  describe 'post_token_deploy test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_token_mint
  # Mint new tokens
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [TransactionStatusSpecificResponse]
  describe 'post_token_mint test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_token_transfer
  # Transfer tokens between wallets
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [TransactionStatusSpecificResponse]
  describe 'post_token_transfer test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_token_whitelist
  # Add an investor to a token&#39;s whitelist
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [TransactionStatusSpecificResponse]
  describe 'post_token_whitelist test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_wallet
  # Create a wallet under your firm.
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [WalletCreateResponse]
  describe 'post_wallet test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_wallet_key
  # Associate an existing key pair with a wallet defined for your firm.
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [WalletKeyCreateResponse]
  describe 'post_wallet_key test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_wallet_key_generator
  # Generate a wallet key using the Key Service and associate with a wallet defined for your firm.
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [WalletKeyCreateResponse]
  describe 'post_wallet_key_generator test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for post_webhook
  # Create a webhook under your firm.
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [WebhookCreateResponse]
  describe 'post_webhook test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_currency
  # Update a currency
  # @param currency_id UUID of a currency
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [CurrencySpecificResponse]
  describe 'update_currency test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_token
  # Update a token
  # @param token_id UUID of a token
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [TokenSpecificResponse]
  describe 'update_token test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_wallet
  # Update a wallet
  # @param wallet_id UUID of a wallet
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [WalletSpecificResponse]
  describe 'update_wallet test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_wallet_permission
  # Update a wallet&#39;s permission
  # @param wallet_id UUID of a wallet
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [WalletPermissionSpecificResponse]
  describe 'update_wallet_permission test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_webhook
  # Update a webhook
  # @param webhook_id UUID of a webhook
  # @param payload 
  # @param [Hash] opts the optional parameters
  # @return [WebhookSpecificResponse]
  describe 'update_webhook test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
