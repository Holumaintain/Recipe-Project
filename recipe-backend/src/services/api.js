const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function apiFetch(endpoint, options = {}) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "API error");
    }

    return res.json();
  } catch (err) {
    console.error("API Error:", err.message);
    throw err;
  }
}
