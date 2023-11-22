const { isInvalidEmail, isEmptyPayload} = require('../validator')

test('valid email', function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        interest: "testing"
    }

const result = isInvalidEmail(testPayload)
expect(result).toBe(false)
})

test('invalid email', function() {
    const testPayload = {
        name: "test name",
        email: "test.emailexample.com",
        interest: "testing"
    }

const result = isInvalidEmail(testPayload)
expect(result).toBe(true)
})

test('empty payload', function() {
    const testPayload = {}
    const result = isEmptyPayload(testPayload)    
    expect(result).toBe(true)
})

test('not empty payload', function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        interest: "testing"
    }

    const result = isEmptyPayload(testPayload)    
    expect(result).toBe(false)
})