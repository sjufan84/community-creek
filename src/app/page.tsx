export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
          Flowing Towards <span className="text-primary">Resilience</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Community Creek is a digital garden for local connection.
          Find food, shelter, and neighbors without the middleman.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mt-12">
        <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all group cursor-pointer">
          <div className="h-10 w-10 rounded-full bg-secondary/50 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
            🌿
          </div>
          <h3 className="text-lg font-semibold mb-2">Abundance</h3>
          <p className="text-sm text-muted-foreground">
            Share what you have. From tomatoes to tools, let the surplus flow.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all group cursor-pointer">
          <div className="h-10 w-10 rounded-full bg-accent/20 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
            💧
          </div>
          <h3 className="text-lg font-semibold mb-2">Needs</h3>
          <p className="text-sm text-muted-foreground">
            Ask for what you need. Community resilience starts with honesty.
          </p>
        </div>
      </div>

      <div className="pt-12 space-y-6">
        <div className="bg-muted/50 rounded-lg p-4 text-sm max-w-md mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary/50" />
          <p className="font-medium mb-1">Pass the Baton</p>
          <p className="text-muted-foreground">
            Next agent: skim the prompt contract, pick a backlog slice, ship it, and leave a handoff note.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Enter the Stream
          </button>
          <span className="text-sm text-muted-foreground">
            Handoff notes live in <code>notes/handoffs</code>
          </span>
        </div>
      </div>
    </div>
  );
}
