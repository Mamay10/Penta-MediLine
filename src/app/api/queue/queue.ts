// src/pages/api/queue.ts

import { NextApiRequest, NextApiResponse } from 'next';

interface QueueEntry {
  id: string;
  name: string;
  time: string;
  doctor: string;
  clinic: string;
  status: 'waiting' | 'called' | 'finished';
}

// Data sementara dalam memori (untuk keperluan testing)
let queueData: QueueEntry[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Mengembalikan semua data antrian
    res.status(200).json(queueData);
  } else if (req.method === 'POST') {
    // Menambahkan data baru ke antrian
    const { id, name, time, doctor, clinic } = req.body;

    if (!id || !name || !time || !doctor || !clinic) {
      return res.status(400).json({ message: 'Data tidak lengkap' });
    }

    const newEntry: QueueEntry = {
      id,
      name,
      time,
      doctor,
      clinic,
      status: 'waiting',
    };

    queueData.push(newEntry);
    res.status(201).json(newEntry);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
