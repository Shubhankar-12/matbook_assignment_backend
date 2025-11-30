// Native fetch is available in Node 20

const BASE_URL = "http://localhost:8080/api";

async function verify() {
    try {
        console.log("1. Get Form Schema");
        const schemaRes = await fetch(`${BASE_URL}/form-schema`);
        console.log("Status:", schemaRes.status);
        if (schemaRes.ok) {
            const schemaData = await schemaRes.json();
            console.log("Data:", JSON.stringify(schemaData, null, 2));
        } else {
            console.log("Error:", await schemaRes.text());
        }

        console.log("\n2. Create Submission");
        const submissionData = {
            values: {
                name: "John Doe",
                email: "john@example.com",
                message: "Hello World",
            },
        };
        const createRes = await fetch(`${BASE_URL}/submissions`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(submissionData),
        });
        console.log("Status:", createRes.status);
        let submissionId;
        if (createRes.ok) {
            const createdSubmission = await createRes.json();
            console.log("Data:", JSON.stringify(createdSubmission, null, 2));
            submissionId = createdSubmission._id;
        } else {
            console.log("Error:", await createRes.text());
        }

        if (!submissionId) {
            console.error("Failed to create submission, cannot proceed with ID-based tests.");
            return;
        }

        console.log("\n3. Get Submissions (Paginated)");
        const listRes = await fetch(`${BASE_URL}/submissions?page=1&limit=10`);
        console.log("get url", `${BASE_URL}/submissions?page=1&limit=10`);
        console.log("Status:", listRes.status);
        if (listRes.ok) {
            const listData = await listRes.json();
            console.log("Data:", JSON.stringify(listData, null, 2));
        } else {
            console.log("Error:", await listRes.text());
        }

        console.log(`\n4. Get Submission by ID: ${submissionId}`);
        const getRes = await fetch(`${BASE_URL}/submissions/${submissionId}`);

        console.log("Status:", getRes.status);
        if (getRes.ok) {
            const getData = await getRes.json();
            console.log("Data:", JSON.stringify(getData, null, 2));
        } else {
            console.log("Error:", await getRes.text());
        }

        console.log(`\n5. Update Submission: ${submissionId}`);
        const updateData = {
            values: {
                name: "John Doe Updated",
                email: "john@example.com",
                message: "Hello World Updated",
            },
        };
        const updateRes = await fetch(`${BASE_URL}/submissions/${submissionId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateData),
        });
        console.log("Status:", updateRes.status);
        if (updateRes.ok) {
            const updateResult = await updateRes.json();
            console.log("Data:", JSON.stringify(updateResult, null, 2));
        } else {
            console.log("Error:", await updateRes.text());
        }

        console.log(`\n6. Delete Submission: ${submissionId}`);
        // const deleteRes = await fetch(`${BASE_URL}/submissions/${submissionId}`, {
        //     method: "DELETE",
        // });
        // console.log("Status:", deleteRes.status);
        // if (deleteRes.ok) {
        //     const deleteResult = await deleteRes.json();
        //     console.log("Data:", JSON.stringify(deleteResult, null, 2));
        // } else {
        //     console.log("Error:", await deleteRes.text());
        // }

        console.log("\nVerification Complete");
    } catch (error) {
        console.error("Verification Failed:", error);
    }
}

verify();
