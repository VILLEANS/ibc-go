package keeper

/*
	This file is to allow for unexported functions to be accessible to the testing package.
*/

func GenerateWasmChecksum(code []byte) []byte {
	return generateWasmChecksum(code)
}
