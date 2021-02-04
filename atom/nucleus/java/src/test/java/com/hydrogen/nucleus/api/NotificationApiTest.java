/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.8.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.api;

import com.hydrogen.nucleus.ApiException;
import com.hydrogen.nucleus.model.Notification;
import com.hydrogen.nucleus.model.NotificationClient;
import com.hydrogen.nucleus.model.NotificationSetting;
import com.hydrogen.nucleus.model.PageNotification;
import com.hydrogen.nucleus.model.PageNotificationClient;
import com.hydrogen.nucleus.model.PageNotificationSetting;
import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

/**
 * API tests for NotificationApi
 */
@Ignore
public class NotificationApiTest {

    private final NotificationApi api = new NotificationApi();

    
    /**
     * Create a Notification Client
     *
     * Create a new Notification Client. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createNotificationClientUsingPostTest() throws ApiException {
        NotificationClient notificationClient = null;
        NotificationClient response = api.createNotificationClientUsingPost(notificationClient);

        // TODO: test validations
    }
    
    /**
     * Create a Notification Setting
     *
     * Create a new Notification Setting. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createNotificationSettingUsingPostTest() throws ApiException {
        NotificationSetting notificationSetting = null;
        NotificationSetting response = api.createNotificationSettingUsingPost(notificationSetting);

        // TODO: test validations
    }
    
    /**
     * Create a Notification
     *
     * Create a new Notification. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createNotificationUsingPostTest() throws ApiException {
        Notification notification = null;
        Notification response = api.createNotificationUsingPost(notification);

        // TODO: test validations
    }
    
    /**
     * Delete a Notification Client
     *
     * Permanently Delete Notification Client.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteNotificationClientUsingDeleteTest() throws ApiException {
        UUID notificationClientId = null;
        api.deleteNotificationClientUsingDelete(notificationClientId);

        // TODO: test validations
    }
    
    /**
     * Delete a Notification Setting
     *
     * Permanently Delete Notification Setting. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteNotificationSettingUsingDeleteTest() throws ApiException {
        UUID notificationSettingId = null;
        api.deleteNotificationSettingUsingDelete(notificationSettingId);

        // TODO: test validations
    }
    
    /**
     * Delete a Notification
     *
     * Permanently Delete a Notification. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteNotificationUsingDeleteTest() throws ApiException {
        UUID notificationId = null;
        api.deleteNotificationUsingDelete(notificationId);

        // TODO: test validations
    }
    
    /**
     * Get All Notifications
     *
     * Get All Notification. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getNotificationAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageNotification response = api.getNotificationAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * List all Notification Client
     *
     * List all Notification Client. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getNotificationClientAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageNotificationClient response = api.getNotificationClientAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a Notification Client
     *
     * Retrieve a  Notification Client. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getNotificationClientUsingGetTest() throws ApiException {
        UUID notificationClientId = null;
        NotificationClient response = api.getNotificationClientUsingGet(notificationClientId);

        // TODO: test validations
    }
    
    /**
     * List all Notification Setting
     *
     * List all Notification Setting. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getNotificationSettingAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageNotificationSetting response = api.getNotificationSettingAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * Retrieve a Notification Setting
     *
     * Retrieve a  Notification Setting. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getNotificationSettingUsingGetTest() throws ApiException {
        UUID notificationSettingId = null;
        NotificationSetting response = api.getNotificationSettingUsingGet(notificationSettingId);

        // TODO: test validations
    }
    
    /**
     * Get a Notification
     *
     * Get a Notification. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getNotificationUsingGetTest() throws ApiException {
        UUID notificationId = null;
        Notification response = api.getNotificationUsingGet(notificationId);

        // TODO: test validations
    }
    
    /**
     * Update a Notification Client
     *
     * Update a  Notification Client. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateNotificationClientUsingPutTest() throws ApiException {
        Object notificationClient = null;
        UUID notificationClientId = null;
        NotificationClient response = api.updateNotificationClientUsingPut(notificationClient, notificationClientId);

        // TODO: test validations
    }
    
    /**
     * Update a Notification Setting
     *
     * Update a  Notification Setting. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateNotificationSettingUsingPutTest() throws ApiException {
        Object notificationSetting = null;
        UUID notificationSettingId = null;
        NotificationSetting response = api.updateNotificationSettingUsingPut(notificationSetting, notificationSettingId);

        // TODO: test validations
    }
    
    /**
     * Update a Notification
     *
     * Update a Notification. 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateNotificationUsingPutTest() throws ApiException {
        Object notification = null;
        UUID notificationId = null;
        Notification response = api.updateNotificationUsingPut(notification, notificationId);

        // TODO: test validations
    }
    
}
