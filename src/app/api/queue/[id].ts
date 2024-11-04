// src/pages/api/queue/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const queueEntry = queueData.find((entry) => entry.id === id);

    if (!queueEntry) {
      return res.status(404).json({ message: 'Data antrian tidak ditemukan' });
    }

    const { status } = req.body;
    queueEntry.status = status || queueEntry.status;

    res.status(200).json(queueEntry);
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
