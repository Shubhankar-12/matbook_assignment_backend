// Native fetch is available in Node 20

const BASE_URL = "http://localhost:8080/api";

async function reproduce() {
    try {
        console.log("Testing Malformed JSON Body on GET");
        // Native fetch doesn't easily allow sending body with GET, but we can try sending invalid content-type or something.
        // Actually, let's try to simulate what Postman might do.

        // Test 1: GET with invalid JSON body
        // We need to use 'http' module or something that allows body in GET if fetch is strict.
        // But let's try fetch first.

        try {
            const res = await fetch(`${BASE_URL}/submissions`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                body: '{ "foo": }' // Invalid JSON
            });
            console.log("Status:", res.status);
            console.log("Text:", await res.text());
        } catch (e) {
            console.log("Fetch failed (expected for GET with body):", e.message);
        }

        // Test 2: GET with valid JSON body (should be ignored or 200)
        try {
            const res = await fetch(`${BASE_URL}/submissions`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                body: '{ "foo": "bar" }'
            });
            console.log("Status:", res.status);
            console.log("Text:", await res.text());
        } catch (e) {
            console.log("Fetch failed:", e.message);
        }

    } catch (error) {
        console.error("Reproduction Failed:", error);
    }
}

reproduce();
