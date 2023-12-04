package ibcwasm

import (
	"errors"

	wasmvm "github.com/CosmWasm/wasmvm"

	"cosmossdk.io/collections"
	storetypes "cosmossdk.io/core/store"
)

var (
	vm WasmEngine

	queryRouter QueryRouter
	querier     wasmvm.Querier

	VMGasRegister = NewDefaultWasmGasRegister()

	// state management
	Schema    collections.Schema
	Checksums collections.KeySet[[]byte]

	// ChecksumsKey is the key under which all checksums are stored
	ChecksumsKey = collections.NewPrefix(0)
)

// SetVM sets the wasm VM for the 08-wasm module.
// It panics if the wasm VM is nil.
func SetVM(wasmVM WasmEngine) {
	if wasmVM == nil {
		panic(errors.New("wasm VM must be not nil"))
	}
	vm = wasmVM
}

// GetVM returns the wasm VM for the 08-wasm module.
func GetVM() WasmEngine {
	return vm
}

// SetQuerier sets the custom wasm query handle for the 08-wasm module.
// If wasmQuerier is nil a default querier is used that return always an error for any query.
func SetQuerier(wasmQuerier wasmvm.Querier) {
	querier = wasmQuerier
}

// SetQueryRouter sets the query router for the 08-wasm module.
// It panics if the query router is nil.
func SetQueryRouter(router QueryRouter) {
	if router == nil {
		panic(errors.New("query router must be not nil"))
	}
	queryRouter = router
}

// GetQueryRouter returns the query router for the 08-wasm module.
func GetQueryRouter() QueryRouter {
	return queryRouter
}

// SetupWasmStoreService sets up the 08-wasm module's collections.
func SetupWasmStoreService(storeService storetypes.KVStoreService) {
	sb := collections.NewSchemaBuilder(storeService)

	Checksums = collections.NewKeySet(sb, ChecksumsKey, "checksums", collections.BytesKey)

	schema, err := sb.Build()
	if err != nil {
		panic(err)
	}

	Schema = schema
}
