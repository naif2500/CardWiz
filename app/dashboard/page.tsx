// app/dashboard/page.tsx
"use client"
import { useAuth } from "../hooks/useAuth"; // Assuming you have a custom hook for auth
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import FlipCard from "@/components/animata/card/flip-card"; // Import FlipCard component


interface Flashcard {
  id: string;
  question: string;
  answer: string;
}

export default function Dashboard() {
  const { user } = useAuth();
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    if (user) {
      const fetchFlashcards = async () => {
        const q = query(collection(db, "flashcards"), where("uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const cards = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Flashcard[];
        setFlashcards(cards);
      };
      fetchFlashcards();
    }
  }, [user]);

  const handleAddFlashcard = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user) {
      try {
        await addDoc(collection(db, "flashcards"), {
          uid: user.uid,
          question,
          answer,
        });
        setQuestion("");
        setAnswer("");
      } catch (error) {
        const errorMessage = (error as Error).message;
        console.error('Error fetching flashcards:', errorMessage);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
      {user && (
        <div>
          {/* Form to add flashcard */}
          <form onSubmit={handleAddFlashcard} className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="mb-4">
              <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                Question
              </label>
              <input
                id="question"
                type="text"
                placeholder="Enter your question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
                Answer
              </label>
              <input
                id="answer"
                type="text"
                placeholder="Enter the answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add Flashcard
            </button>
          </form>

          {/* Display flashcards */}
          <h2 className="text-2xl font-bold mb-4">Your Flashcards</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {flashcards.map((flashcard) => (
              <FlipCard
                key={flashcard.id}
                image="/cardwizcard.png" // Default image placeholder
                title={flashcard.question} // Question on the front
                subtitle="Answer"
                description={flashcard.answer} // Answer on the back
                rotate="y" // Card flips along the Y-axis
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
