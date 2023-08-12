import { json } from '@sveltejs/kit';
import { kv } from '@vercel/kv';

export async function GET() {
	return json({
		value: await kv.get('value')
	});
}

export async function POST(event) {
	const value = await event.request.json();
	await kv.set('value', value);

	return json({
		value
	});
}
