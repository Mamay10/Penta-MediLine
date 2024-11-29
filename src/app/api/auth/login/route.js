import { NextResponse } from 'next/server';

export async function POST(req) {
    const { username, password } = await req.json();

    // Data hardcoded untuk contoh, sebaiknya gunakan database di produksi
    const validUser = {
        username: 'admin',
        password: '123456'
    };

    if (username === validUser.username && password === validUser.password) {
        // Contoh token, dalam produksi biasanya Anda menggunakan JWT atau token unik
        const token = 'dummy-token';
        return NextResponse.json({ message: 'Login berhasil', token }, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Username atau password salah' }, { status: 401 });
    }
}

