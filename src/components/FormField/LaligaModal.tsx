'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../ui/button';

interface LaligaProps {
  isOpen: boolean;
  onClose: () => void;
  player: {
    name: string;
    price: number;
    position: string;
    // nationality: string;
    assist: number;
    dribble: number;
    goals: number;
  };
}

export function LaligaModal({ isOpen, onClose, player }: LaligaProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-0 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white w-[90%] max-w-md p-8 rounded-2xl shadow-2xl border border-slate-700"
          >
            <button
              className="absolute top-4 right-4 p-2 bg-slate-700 hover:bg-red-600 rounded-full transition-all cursor-pointer"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h2 className="text-1xl font-extrabold text-center text-blue-400 mb-6 tracking-wide">
              {player.name}
            </h2>

            <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
              <div className="bg-slate-700/50 p-3 rounded-md shadow">
                <p className="text-slate-400">🏷️ Position</p>
                <p className="font-semibold">{player.position}</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded-md shadow">
                <p className="text-slate-400">🌍 Nationality</p>
                {/* <p className="font-semibold">{player.nationality}</p> */}
              </div>
              <div className="bg-slate-700/50 p-3 rounded-md shadow">
                <p className="text-slate-400">⚽ Goals</p>
                <p className="font-semibold">{player.goals}</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded-md shadow">
                <p className="text-slate-400">🎯 Assists</p>
                <p className="font-semibold">{player.assist}</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded-md shadow">
                <p className="text-slate-400">🌀 Dribbles</p>
                <p className="font-semibold">{player.dribble}</p>
              </div>
              <div className="bg-slate-700/50 p-3 rounded-md shadow col-span-2">
                <p className="text-slate-400">💰 Price</p>
                <p className="font-semibold text-green-400">${player.price.toLocaleString()}</p>
              </div>
              <Button className='w-full bg-blue-500'>Buy</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}