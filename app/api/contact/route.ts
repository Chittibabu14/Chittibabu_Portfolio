import { NextResponse } from "next/server"

export async function POST(req: Request) {
	const data = await req.json()
	console.log("New contact:", data)

	return NextResponse.json({
		message: "Thanks! Your message has been sent.",
	})
}
