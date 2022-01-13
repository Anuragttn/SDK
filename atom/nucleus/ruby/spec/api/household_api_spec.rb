=begin
#Hydrogen Nucleus API

#The Hydrogen Nucleus API

OpenAPI spec version: 1.9.5
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.20

=end

require 'spec_helper'
require 'json'

# Unit tests for NucleusApi::HouseholdApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'HouseholdApi' do
  before do
    # run before each test
    @instance = NucleusApi::HouseholdApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of HouseholdApi' do
    it 'should create an instance of HouseholdApi' do
      expect(@instance).to be_instance_of(NucleusApi::HouseholdApi)
    end
  end

  # unit tests for create_household_using_post
  # Create a Household
  # Create a new household, with your firm.
  # @param household household
  # @param [Hash] opts the optional parameters
  # @return [Household]
  describe 'create_household_using_post test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for delete_household_using_delete
  # Delete a Household
  # Permanently delete a household
  # @param household_id UUID household_id
  # @param [Hash] opts the optional parameters
  # @return [nil]
  describe 'delete_household_using_delete test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_household_all_using_get
  # List all household
  # Get details for all Household.
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @return [PageHousehold]
  describe 'get_household_all_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_household_client_asset_size_using_get
  # List all household client asset sizes
  # Get a list of asset sizes per date for a client&#39;s household.
  # @param household_id UUID household_id
  # @param [Hash] opts the optional parameters
  # @option opts [String] :currency_conversion USD
  # @option opts [Date] :end_date end date
  # @option opts [BOOLEAN] :exclude_subledger true or false
  # @option opts [BOOLEAN] :get_latest true or false
  # @option opts [String] :sort_type  Quarter (Q), Monthly (M) , Annually (Y), Daily (D) --caps matter, codes in ()
  # @option opts [Date] :start_date start date
  # @return [Array<AvailableDateDoubleVO>]
  describe 'get_household_client_asset_size_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_household_client_holding_using_get
  # List all household&#39;s clientIds holdings
  # Get the information for all the securities that are currently being held by a household&#39;s client ids registered with your firm.
  # @param household_id UUID household_id
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :currency_conversion USD
  # @option opts [Date] :end_date end date - yyyy-mm-dd
  # @option opts [String] :filter filter
  # @option opts [BOOLEAN] :get_latest true or false
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @option opts [Date] :start_date start date - yyyy-mm-dd
  # @return [PagePortfolioHoldingAgg]
  describe 'get_household_client_holding_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_household_client_transaction_using_get
  # List all household&#39;s client ids transactions
  # Get the information for all transactions under a household client ids registered with your firm.
  # @param household_id UUID household_id
  # @param [Hash] opts the optional parameters
  # @option opts [BOOLEAN] :ascending ascending
  # @option opts [String] :currency_conversion USD
  # @option opts [Date] :end_date end date
  # @option opts [String] :filter filter
  # @option opts [String] :order_by order_by
  # @option opts [Integer] :page page
  # @option opts [Integer] :size size
  # @option opts [Date] :start_date start date
  # @return [PagePortfolioTransaction]
  describe 'get_household_client_transaction_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for get_household_using_get
  # Retrieve a Household
  # Retrieve the information for a Household.
  # @param household_id UUID household_id
  # @param [Hash] opts the optional parameters
  # @return [Household]
  describe 'get_household_using_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for update_household_using_put
  # Update a Household
  # Update the information for a Household.
  # @param household household
  # @param household_id UUID household_id
  # @param [Hash] opts the optional parameters
  # @return [Household]
  describe 'update_household_using_put test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
