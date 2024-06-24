// Api to get GTA III Cheats from MongoDB
import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('gta-3');
    const cheats = await collection.find({}).toArray();
    return NextResponse.json({ success: true, data: cheats });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
