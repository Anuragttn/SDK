/*
 * Hydrogen Admin API
 * The Hydrogen Admin API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.admin.model;

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModelProperty;
import org.threeten.bp.OffsetDateTime;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

public class AppTokenConfig {

    private String clientId;
    private String clientSecret;
    private String username;
    private String password;
    private String publicKey;
    private String userAccessToken;
    private String basePath;
    private boolean isCredsPassed;
    private boolean isEmbed;
    private List<String> appNames = new ArrayList<>();
    private List<TagAttributes> attributes = new ArrayList<>();

    public String getClientId() {
        return clientId;
    }

    public AppTokenConfig setClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public AppTokenConfig setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }

    public String getUsername() {
        return username;
    }

    public AppTokenConfig setUsername(String username) {
        this.username = username;
        return this;
    }

    public String getPassword() {
        return password;
    }

    public AppTokenConfig setPassword(String password) {
        this.password = password;
        return this;
    }

    public String getPublicKey() {
        return publicKey;
    }

    public AppTokenConfig setPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }

    public String getUserAccessToken() {
        return userAccessToken;
    }

    public AppTokenConfig setUserAccessToken(String userAccessToken) {
        this.userAccessToken = userAccessToken;
        return this;
    }

    public boolean getIsCredsPassed() {
        return isCredsPassed;
    }

    public AppTokenConfig setIsCredsPassed(boolean credsPassed) {
        isCredsPassed = credsPassed;
        return this;
    }

    public boolean getIsEmbed() {
        return isEmbed;
    }

    public AppTokenConfig setIsEmbed(boolean embed) {
        isEmbed = embed;
        return this;
    }

    public List<String> getAppNames() {
        return appNames;
    }

    public AppTokenConfig setAppNames(List<String> appNames) {
        this.appNames = appNames;
        return this;
    }

    public List<TagAttributes> getAttributes() {
        return attributes;
    }

    public AppTokenConfig setAttributes(List<TagAttributes> attributes) {
        this.attributes = attributes;
        return this;
    }

    public String getBasePath() {
        return basePath;
    }

    public AppTokenConfig setBasePath(String basePath) {
        this.basePath = basePath;
        return this;
    }
}
