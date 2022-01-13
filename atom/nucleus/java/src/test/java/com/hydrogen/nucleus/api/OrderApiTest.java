/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.5
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.api;

import com.hydrogen.nucleus.ApiException;
import com.hydrogen.nucleus.model.AccountPortfolioRebalanceRequest;
import com.hydrogen.nucleus.model.Order;
import com.hydrogen.nucleus.model.OrderReconcileRequest;
import com.hydrogen.nucleus.model.OrderReconcileReturnObject;
import com.hydrogen.nucleus.model.OrderStatus;
import com.hydrogen.nucleus.model.OrderTrack;
import com.hydrogen.nucleus.model.OrderVoClone;
import com.hydrogen.nucleus.model.PageOrder;
import com.hydrogen.nucleus.model.PageOrderBulk;
import com.hydrogen.nucleus.model.PageOrderStatus;
import com.hydrogen.nucleus.model.PageOrderTrack;
import com.hydrogen.nucleus.model.TokenDateRequest;
import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for OrderApi
 */
@Ignore
public class OrderApiTest {

    private final OrderApi api = new OrderApi();

    
    /**
     * Bulk orders for an account
     *
     * Aggregates all orders on a given date for an account.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createAccountOrderBulkUsingPostTest() throws ApiException {
        UUID accountId = null;
        TokenDateRequest req = null;
        List<Order> response = api.createAccountOrderBulkUsingPost(accountId, req);

        // TODO: test validations
    }
    
    /**
     * Create buy-only account rebalance orders
     *
     * Create order records necessary to rebalance an account and all its portfolios according to the allocation(s) to which the account subscribes and models to which the portfolios subscribe.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createAccountOrderBuyOnlyUsingPostTest() throws ApiException {
        UUID accountId = null;
        AccountPortfolioRebalanceRequest req = null;
        List<OrderVoClone> response = api.createAccountOrderBuyOnlyUsingPost(accountId, req);

        // TODO: test validations
    }
    
    /**
     * Create account rebalance orders
     *
     * Create order records necessary to rebalance an account and all its portfolios according to the allocation(s) to which the account subscribes and models to which the portfolios subscribe. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createAccountOrderRebalanceUsingPostTest() throws ApiException {
        UUID accountId = null;
        AccountPortfolioRebalanceRequest req = null;
        List<OrderVoClone> response = api.createAccountOrderRebalanceUsingPost(accountId, req);

        // TODO: test validations
    }
    
    /**
     * Create account reconciliation order
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createAccountOrderReconciliationTest() throws ApiException {
        UUID accountId = null;
        OrderReconcileRequest req = null;
        OrderReconcileReturnObject response = api.createAccountOrderReconciliation(accountId, req);

        // TODO: test validations
    }
    
    /**
     * Sell all account order
     *
     * Create order records necessary to entirely sell all the holdings within an account.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createAccountOrderSellAllUsingPostTest() throws ApiException {
        UUID accountId = null;
        AccountPortfolioRebalanceRequest req = null;
        List<OrderVoClone> response = api.createAccountOrderSellAllUsingPost(accountId, req);

        // TODO: test validations
    }
    
    /**
     * Create sell-only account rebalance orders
     *
     * Create order records necessary to rebalance an account and all its portfolios according to the allocation(s) to which the account subscribes and models to which the portfolios subscribe.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createAccountOrderSellOnlyUsingPostTest() throws ApiException {
        UUID accountId = null;
        AccountPortfolioRebalanceRequest req = null;
        List<OrderVoClone> response = api.createAccountOrderSellOnlyUsingPost(accountId, req);

        // TODO: test validations
    }
    
    /**
     * Bulk orders for a client
     *
     * Aggregates all orders on a given date for a client
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createClientOrderBulkUsingPostTest() throws ApiException {
        UUID clientId = null;
        TokenDateRequest req = null;
        List<Order> response = api.createClientOrderBulkUsingPost(clientId, req);

        // TODO: test validations
    }
    
    /**
     * Bulk orders for your firm
     *
     * Aggregates all orders on a given date for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrderBulkUsingPostTest() throws ApiException {
        TokenDateRequest req = null;
        List<Order> response = api.createOrderBulkUsingPost(req);

        // TODO: test validations
    }
    
    /**
     * Create an order status
     *
     * Create an order status for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrderStatusUsingPostTest() throws ApiException {
        OrderStatus orderStatusRequest = null;
        OrderStatus response = api.createOrderStatusUsingPost(orderStatusRequest);

        // TODO: test validations
    }
    
    /**
     * Create an order tracking record
     *
     * Create a new order tracking record for an order.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrderTrackUsingPostTest() throws ApiException {
        OrderTrack orderTrackRequest = null;
        OrderTrack response = api.createOrderTrackUsingPost(orderTrackRequest);

        // TODO: test validations
    }
    
    /**
     * Create an order record
     *
     * Create an order record defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createOrderUsingPostTest() throws ApiException {
        Order orderInfoRequest = null;
        Order response = api.createOrderUsingPost(orderInfoRequest);

        // TODO: test validations
    }
    
    /**
     * Create buy-only portfolio rebalance orders
     *
     * Create order records necessary to rebalance a portfolio to the model to which it subscribes. However, these will only be buy transactions, and no securities will be sold.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createPortfolioOrderBuyOnlyUsingPostTest() throws ApiException {
        UUID portfolioId = null;
        AccountPortfolioRebalanceRequest req = null;
        List<OrderVoClone> response = api.createPortfolioOrderBuyOnlyUsingPost(portfolioId, req);

        // TODO: test validations
    }
    
    /**
     * Create portfolio rebalance orders
     *
     * Create order records necessary to rebalance a portfolio to the model to which it subscribes.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createPortfolioOrderRebalanceUsingPostTest() throws ApiException {
        UUID portfolioId = null;
        AccountPortfolioRebalanceRequest req = null;
        List<OrderVoClone> response = api.createPortfolioOrderRebalanceUsingPost(portfolioId, req);

        // TODO: test validations
    }
    
    /**
     * Create portfolio reconciliation order
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createPortfolioOrderReconciliationTest() throws ApiException {
        UUID portfolioId = null;
        OrderReconcileRequest req = null;
        OrderReconcileReturnObject response = api.createPortfolioOrderReconciliation(portfolioId, req);

        // TODO: test validations
    }
    
    /**
     * Sell all portfolio order
     *
     * Create order records necessary to entirely sell all the holdings within a portfolio.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createPortfolioOrderSellAllUsingPostTest() throws ApiException {
        UUID portfolioId = null;
        AccountPortfolioRebalanceRequest req = null;
        List<OrderVoClone> response = api.createPortfolioOrderSellAllUsingPost(portfolioId, req);

        // TODO: test validations
    }
    
    /**
     * Create sell-only portfolio rebalance orders
     *
     * Create order records necessary to rebalance a portfolio to the model to which it subscribes.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createPortfolioOrderSellOnlyUsingPostTest() throws ApiException {
        UUID portfolioId = null;
        AccountPortfolioRebalanceRequest req = null;
        List<OrderVoClone> response = api.createPortfolioOrderSellOnlyUsingPost(portfolioId, req);

        // TODO: test validations
    }
    
    /**
     * Delete an order status
     *
     * Permanently delete an order status defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteOrderStatusUsingDeleteTest() throws ApiException {
        UUID orderStatusId = null;
        api.deleteOrderStatusUsingDelete(orderStatusId);

        // TODO: test validations
    }
    
    /**
     * Delete an order tracking record
     *
     * Permanently delete an order tracking record for an order.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteOrderTrackUsingDeleteTest() throws ApiException {
        UUID orderTrackId = null;
        api.deleteOrderTrackUsingDelete(orderTrackId);

        // TODO: test validations
    }
    
    /**
     * Delete an order record
     *
     * Permanently delete an order record.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteOrderUsingDeleteTest() throws ApiException {
        UUID orderId = null;
        api.deleteOrderUsingDelete(orderId);

        // TODO: test validations
    }
    
    /**
     * List all order records
     *
     * Get the information for all order records defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getOrderAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageOrder response = api.getOrderAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * List all bulk orders
     *
     * Get the information for all bulk order records.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getOrderBulkAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageOrderBulk response = api.getOrderBulkAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * List all order statuses
     *
     * Get the information for all order statuses defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getOrderStatusAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageOrderStatus response = api.getOrderStatusAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve an order status
     *
     * Retrieve the information for an order status defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getOrderStatusUsingGetTest() throws ApiException {
        UUID orderStatusId = null;
        OrderStatus response = api.getOrderStatusUsingGet(orderStatusId);

        // TODO: test validations
    }
    
    /**
     * List all order tracking records
     *
     * Get the information for all order tracking record for all order records.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getOrderTrackAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageOrderTrack response = api.getOrderTrackAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve an order tracking record
     *
     * Retrieve the information for an order tracking record for an order.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getOrderTrackUsingGetTest() throws ApiException {
        UUID orderTrackId = null;
        OrderTrack response = api.getOrderTrackUsingGet(orderTrackId);

        // TODO: test validations
    }
    
    /**
     * Retrieve an order record
     *
     * Retrieve the information for an order record.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getOrderUsingGetTest() throws ApiException {
        UUID orderId = null;
        Order response = api.getOrderUsingGet(orderId);

        // TODO: test validations
    }
    
    /**
     * Update an order status
     *
     * Update the information for an order status defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateOrderStatusUsingPutTest() throws ApiException {
        Object orderStatus = null;
        UUID orderStatusId = null;
        OrderStatus response = api.updateOrderStatusUsingPut(orderStatus, orderStatusId);

        // TODO: test validations
    }
    
    /**
     * Update an order tracking record
     *
     * Update the information for an order tracking record for an order.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateOrderTrackUsingPutTest() throws ApiException {
        Object orderTrack = null;
        UUID orderTrackId = null;
        OrderTrack response = api.updateOrderTrackUsingPut(orderTrack, orderTrackId);

        // TODO: test validations
    }
    
    /**
     * Update an order record
     *
     * Update the information for an order record.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateOrderUsingPutTest() throws ApiException {
        Object order = null;
        UUID orderId = null;
        Order response = api.updateOrderUsingPut(order, orderId);

        // TODO: test validations
    }
    
}
