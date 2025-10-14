/**
 * Cloudflare Pages Function: Database Health Check
 * 
 * This endpoint pings the D1 database and returns a 200 status if the connection is successful.
 * 
 * @route GET /api/db/health
 */

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  try {
    const { DB } = context.env;

    if (!DB) {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: 'Database binding not found',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Simple query to test database connectivity
    const result = await DB.prepare('SELECT 1 as health_check').first();

    if (result && result.health_check === 1) {
      return new Response(
        JSON.stringify({
          status: 'ok',
          message: 'Database connection successful',
          timestamp: new Date().toISOString(),
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Database query failed',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Database health check failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

