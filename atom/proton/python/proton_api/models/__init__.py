# coding: utf-8

# flake8: noqa
"""
    Hydrogen Proton API

    Financial engineering module of Hydrogen Atom  # noqa: E501

    OpenAPI spec version: 1.8.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

# import models into model package
from proton_api.models.accumulation_goal_deposit_config import AccumulationGoalDepositConfig
from proton_api.models.annuity_calculator_accumulation_horizon_request import AnnuityCalculatorAccumulationHorizonRequest
from proton_api.models.annuity_calculator_annuity_amount_request import AnnuityCalculatorAnnuityAmountRequest
from proton_api.models.annuity_calculator_decumulation_horizon_request import AnnuityCalculatorDecumulationHorizonRequest
from proton_api.models.annuity_calculator_deposit_amount_request import AnnuityCalculatorDepositAmountRequest
from proton_api.models.annuity_calculator_initial_balance_request import AnnuityCalculatorInitialBalanceRequest
from proton_api.models.annuity_deposit_schedule import AnnuityDepositSchedule
from proton_api.models.backtest_request import BacktestRequest
from proton_api.models.beneficiary_bequest_config import BeneficiaryBequestConfig
from proton_api.models.budget_aggregation_account import BudgetAggregationAccount
from proton_api.models.budget_calculator_request import BudgetCalculatorRequest
from proton_api.models.budget_component import BudgetComponent
from proton_api.models.budget_details import BudgetDetails
from proton_api.models.business_financial_health_check_request import BusinessFinancialHealthCheckRequest
from proton_api.models.business_invoice_analysis_request import BusinessInvoiceAnalysisRequest
from proton_api.models.calculator_deposit_schedule import CalculatorDepositSchedule
from proton_api.models.calculator_deposit_schedule1 import CalculatorDepositSchedule1
from proton_api.models.card_limit_check_request import CardLimitCheckRequest
from proton_api.models.card_transaction_authorization_request import CardTransactionAuthorizationRequest
from proton_api.models.cash_analysis_request import CashAnalysisRequest
from proton_api.models.cash_flow_analysis_request import CashFlowAnalysisRequest
from proton_api.models.children_education_config import ChildrenEducationConfig
from proton_api.models.customer_analysis_request import CustomerAnalysisRequest
from proton_api.models.decumulation_goal_deposit_config import DecumulationGoalDepositConfig
from proton_api.models.dimensional_risk_score_request import DimensionalRiskScoreRequest
from proton_api.models.diversification_score_request import DiversificationScoreRequest
from proton_api.models.education_calculator_annual_cost_request import EducationCalculatorAnnualCostRequest
from proton_api.models.education_calculator_deposit_amount_request import EducationCalculatorDepositAmountRequest
from proton_api.models.education_calculator_percent_covered_request import EducationCalculatorPercentCoveredRequest
from proton_api.models.education_config import EducationConfig
from proton_api.models.emergency_fund_calculator_request import EmergencyFundCalculatorRequest
from proton_api.models.event_study_request import EventStudyRequest
from proton_api.models.fee_analysis_request import FeeAnalysisRequest
from proton_api.models.financial_health_check_request import FinancialHealthCheckRequest
from proton_api.models.financial_picture_request import FinancialPictureRequest
from proton_api.models.financial_statement_analysis_request import FinancialStatementAnalysisRequest
from proton_api.models.goal_accumulation_allocation_request import GoalAccumulationAllocationRequest
from proton_api.models.goal_accumulation_recommendation_request import GoalAccumulationRecommendationRequest
from proton_api.models.goal_accumulation_status_request import GoalAccumulationStatusRequest
from proton_api.models.goal_config import GoalConfig
from proton_api.models.goal_decumulation_allocation_request import GoalDecumulationAllocationRequest
from proton_api.models.goal_decumulation_recommendation_request import GoalDecumulationRecommendationRequest
from proton_api.models.goal_decumulation_status_request import GoalDecumulationStatusRequest
from proton_api.models.goal_withdrawal_config import GoalWithdrawalConfig
from proton_api.models.guaranteed_rate_benefit import GuaranteedRateBenefit
from proton_api.models.income_config import IncomeConfig
from proton_api.models.life_insurance_needs_calculator_request import LifeInsuranceNeedsCalculatorRequest
from proton_api.models.monte_carlo_request import MonteCarloRequest
from proton_api.models.mortgage_calculator_down_payment_request import MortgageCalculatorDownPaymentRequest
from proton_api.models.mortgage_calculator_home_price_request import MortgageCalculatorHomePriceRequest
from proton_api.models.mortgage_calculator_periodic_payment_request import MortgageCalculatorPeriodicPaymentRequest
from proton_api.models.mvo_request import MvoRequest
from proton_api.models.opt_config import OptConfig
from proton_api.models.opt_config1 import OptConfig1
from proton_api.models.periods import Periods
from proton_api.models.portfolio_optimization_score_request import PortfolioOptimizationScoreRequest
from proton_api.models.portfolio_what_if_request import PortfolioWhatIfRequest
from proton_api.models.purchase_calculator_amount_request import PurchaseCalculatorAmountRequest
from proton_api.models.purchase_calculator_deposit_amount_request import PurchaseCalculatorDepositAmountRequest
from proton_api.models.purchase_calculator_horizon_request import PurchaseCalculatorHorizonRequest
from proton_api.models.ratio_targets import RatioTargets
from proton_api.models.ratio_targets1 import RatioTargets1
from proton_api.models.rebalancing_signal_request import RebalancingSignalRequest
from proton_api.models.recommendation_config import RecommendationConfig
from proton_api.models.recommendation_config1 import RecommendationConfig1
from proton_api.models.recurring_transaction_analysis_request import RecurringTransactionAnalysisRequest
from proton_api.models.retirement_calculator_deposit_amount_request import RetirementCalculatorDepositAmountRequest
from proton_api.models.retirement_calculator_expenses_request import RetirementCalculatorExpensesRequest
from proton_api.models.retirement_calculator_percent_covered_request import RetirementCalculatorPercentCoveredRequest
from proton_api.models.risk_allocation_request import RiskAllocationRequest
from proton_api.models.risk_score_request import RiskScoreRequest
from proton_api.models.savings_calculator_request import SavingsCalculatorRequest
from proton_api.models.savings_deposit_schedule import SavingsDepositSchedule
from proton_api.models.scenario_analysis_request import ScenarioAnalysisRequest
from proton_api.models.sensitivity_analysis_request import SensitivityAnalysisRequest
from proton_api.models.sensitivity_factor import SensitivityFactor
from proton_api.models.settings import Settings
from proton_api.models.variable_annuity_request import VariableAnnuityRequest
from proton_api.models.w_config import WConfig
from proton_api.models.w_config1 import WConfig1
