=begin
#Hydrogen Proton API

#Financial engineering module of Hydrogen Atom

OpenAPI spec version: 1.8.0
Contact: info@hydrogenplatform.com
Generated by: https://github.com/swagger-api/swagger-codegen.git
Swagger Codegen version: 2.4.17

=end

require 'spec_helper'
require 'json'

# Unit tests for ProtonApi::PersonalFinancialManagementApi
# Automatically generated by swagger-codegen (github.com/swagger-api/swagger-codegen)
# Please update as you see appropriate
describe 'PersonalFinancialManagementApi' do
  before do
    # run before each test
    @instance = ProtonApi::PersonalFinancialManagementApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of PersonalFinancialManagementApi' do
    it 'should create an instance of PersonalFinancialManagementApi' do
      expect(@instance).to be_instance_of(ProtonApi::PersonalFinancialManagementApi)
    end
  end

  # unit tests for budget_calculator
  # Budget Calculator
  # Analyze spending against a defined budget
  # @param budget_calculator_request Request payload for Budget Calculator
  # @param [Hash] opts the optional parameters
  # @return [Hash<String, Object>]
  describe 'budget_calculator test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for cash_flow_analysis
  # Cash Flow Analysis
  # Analyze income, expenses, and net income
  # @param cash_flow_analysis_request Request payload for Cash Flow Analysis
  # @param [Hash] opts the optional parameters
  # @return [Hash<String, Object>]
  describe 'cash_flow_analysis test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for fee_analysis
  # RFee Analysis
  # Analyze fee data
  # @param fee_analysis_request Request payload for Fee Analysis
  # @param [Hash] opts the optional parameters
  # @return [Hash<String, Object>]
  describe 'fee_analysis test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for financial_picture
  # Financial Picture
  # Assess assets, liabilities, and net worth
  # @param financial_picture_request Request payload for Financial Picture
  # @param [Hash] opts the optional parameters
  # @return [Hash<String, Object>]
  describe 'financial_picture test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

  # unit tests for recurring_transaction_analysis
  # Recurring Transaction Analysis
  # Analyze recurring transactions
  # @param recurring_transaction_analysis_request Request payload for Recurring Transaction Analysis
  # @param [Hash] opts the optional parameters
  # @return [Hash<String, Object>]
  describe 'recurring_transaction_analysis test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
