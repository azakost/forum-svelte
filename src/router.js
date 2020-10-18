import Question from "./routes/question.svelte";
import Register from "./routes/register.svelte";
import Rules from "./routes/rules.svelte";
import Add from "./routes/add.svelte";
import Ranking from "./routes/ranking.svelte";
import Ask from "./routes/ask.svelte";
import Profile from "./routes/profile.svelte";
import Login from "./routes/login.svelte";
import Instructions from "./routes/instructions.svelte";
import Questions from "./routes/questions.svelte";

export const routes = new Map();

routes.set("/", Questions);
routes.set("/instructions", Instructions);
routes.set("/login", Login);
routes.set("/profile", Profile);
routes.set("/ask", Ask);
routes.set("/ranking", Ranking);
routes.set("/instructions/add", Add);
routes.set("/ranking/rules", Rules);
routes.set("/login/register", Register);
routes.set("/questions/:id", Question);

routes.set("/profile/questions", Profile);
routes.set("/profile/instructions", Profile);
routes.set("/profile/replies", Profile);
routes.set("/profile/likes", Profile);
