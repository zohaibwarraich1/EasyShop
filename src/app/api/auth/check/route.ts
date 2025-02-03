import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth/utils';

export async function GET(request: NextRequest) {
  try {
    const auth = await isAuthenticated(request);
    
    if (!auth) {
      return new NextResponse(null, { status: 401 });
    }
    
    return new NextResponse(null, { status: 200 });
  } catch (error) {
    console.error('Error checking auth status:', error);
    return new NextResponse(null, { status: 500 });
  }
}
