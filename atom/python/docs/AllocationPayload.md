# AllocationPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the allocation | 
**category** | **str** | Description of the allocation | [optional] 
**client_id** | **str** |  | [optional] 
**benchmark_id** | **str** | The ID for the benchmark that the allocation should be compared to | [optional] 
**inception_date** | **date** | Date that the allocation first was managed | [optional] 
**node_map** | **list[str]** | List of nodes in a decision tree that map to the allocation | [optional] 
**metadata** | **object** | Custom information associated with the allocation in the format key:value | [optional] 
**is_active** | **bool** | Indicator if this allocation is active. Default is true which indicates it is active | [optional] [default to True]
**secondary_id** | [**SecondaryId**](SecondaryId.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

