export interface QuizLogo {
    id: number;
    nom: string;
    image: string;
    propositions: string[];
    created_at?: Date | null;
    updated_at?: Date | null;
}
