import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // 1. Get the key from the URL (e.g., ?key=CFS-RAHUL-001)
  const { searchParams } = new URL(request.url);
  const userKey = searchParams.get('key');

  // 2. YOUR DATABASE OF VALID KEYS
  // In the future, this will come from a real database.
  // For now, you manually add keys here when someone pays you.
  const validKeys = [
    "TEST-KEY-123",      // For your local testing
    "CFS-FOUNDER-001",   // Example customer
    "CFS-VIP-2026"       // Example customer
  ];

  // 3. Check if key exists
  if (userKey && validKeys.includes(userKey)) {
    return NextResponse.json({ 
      status: "Active", 
      message: "License Verified Successfully",
      plan: "FounderKit Pro"
    }, { status: 200 });
  } else {
    return NextResponse.json({ 
      status: "Invalid", 
      message: "License Key not found or expired." 
    }, { status: 403 });
  }
}