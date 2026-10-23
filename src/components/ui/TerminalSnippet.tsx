import React from 'react';
import { Terminal, ShieldCheck, Activity } from 'lucide-react';

export const TerminalSnippet: React.FC = () => {
  return (
    <div className="relative rounded-xl border border-slate-800 bg-[#0c1322] shadow-2xl overflow-hidden font-mono text-xs sm:text-[13px] leading-relaxed">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-slate-400 font-medium text-xs flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            telemetry_gateway.py
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
            <Activity className="w-3 h-3 animate-pulse" />
            99.99% Uptime
          </span>
          <span className="text-[11px] text-cyan-400/90 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/30">
            &lt; 1ms
          </span>
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 sm:p-5 overflow-x-auto text-slate-300 space-y-1.5">
        <div className="text-slate-500 select-none"># High-throughput asynchronous telemetry ingest handler</div>
        <div>
          <span className="text-purple-400">from</span> <span className="text-slate-200">fastapi</span> <span className="text-purple-400">import</span> <span className="text-cyan-300">FastAPI</span>, <span className="text-cyan-300">Depends</span>, <span className="text-cyan-300">BackgroundTasks</span>
        </div>
        <div>
          <span className="text-purple-400">from</span> <span className="text-slate-200">redis.asyncio</span> <span className="text-purple-400">import</span> <span className="text-cyan-300">Redis</span>
        </div>
        <div>
          <span className="text-purple-400">from</span> <span className="text-slate-200">app.core.db</span> <span className="text-purple-400">import</span> <span className="text-blue-300">get_pool</span>, <span className="text-blue-300">AsyncPGPool</span>
        </div>
        <div className="text-slate-600 select-none">&nbsp;</div>

        <div>
          <span className="text-blue-400">@router.post</span>(<span className="text-emerald-300">"/v1/telemetry/ingest"</span>, <span className="text-slate-400">status_code=202</span>)
        </div>
        <div>
          <span className="text-purple-400">async def</span> <span className="text-cyan-400 font-semibold">stream_frame</span>(
        </div>
        <div className="pl-4">
          <span className="text-slate-300">payload: </span><span className="text-amber-300">SensorFrameSchema</span>,
        </div>
        <div className="pl-4">
          <span className="text-slate-300">pool: </span><span className="text-cyan-300">AsyncPGPool</span> = <span className="text-cyan-300">Depends</span>(<span className="text-blue-300">get_pool</span>),
        </div>
        <div className="pl-4">
          <span className="text-slate-300">bg_tasks: </span><span className="text-cyan-300">BackgroundTasks</span>,
        </div>
        <div>
          ):
        </div>

        <div className="pl-4 text-slate-500 select-none"># Verify frame HMAC and queue non-blocking Celery dispatch</div>
        <div className="pl-4">
          <span className="text-slate-200">frame_id</span> = <span className="text-purple-400">await</span> <span className="text-slate-200">pool.execute_atomic</span>(
        </div>
        <div className="pl-8">
          <span className="text-emerald-300">"INSERT INTO telemetry_logs (sensor_id, val) VALUES ($1, $2)"</span>,
        </div>
        <div className="pl-8">
          <span className="text-slate-300">payload.sensor_id, payload.reading</span>
        </div>
        <div className="pl-4">)</div>
        <div className="pl-4">
          <span className="text-slate-200">bg_tasks.add_task</span>(<span className="text-cyan-300">dispatch_alert_pipeline</span>, <span className="text-slate-200">frame_id</span>)
        </div>
        <div className="pl-4">
          <span className="text-purple-400">return</span> &#123;<span className="text-emerald-300">"status"</span>: <span className="text-emerald-300">"queued"</span>, <span className="text-emerald-300">"latency_ms"</span>: <span className="text-cyan-300">0.78</span>&#125;
        </div>
      </div>

      {/* Terminal Live Output Footer */}
      <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          <span>PostgreSQL Connection Pool: 50 active / 0 idle wait</span>
        </div>
        <div className="text-slate-500">
          Raw TCP daemon: <span className="text-emerald-400">RUNNING</span>
        </div>
      </div>
    </div>
  );
};
