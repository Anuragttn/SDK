/*
 * Hydrogen Admin API
 * The Hydrogen Admin API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



package com.hydrogen.admin.model;

public class AppConfig {
    private String appName;
    private String authType;

    public String getAppName() {
        return appName;
    }

    public AppConfig setAppName(String appName) {
        this.appName = appName;
        return this;
    }

    public String getAuthType() {
        return authType;
    }

    public AppConfig setAuthType(String authType) {
        this.authType = authType;
        return this;
    }
}

