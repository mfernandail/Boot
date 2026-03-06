create table projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  repository text,
  url text,
  description text,
  start_date date,
  end_date date,
  created_at timestamp with time zone default now()
);

create table technologies (
  id uuid primary key default gen_random_uuid(),
  name text unique not null,
  created_at timestamp with time zone default now()
);

--Tabla intermedia: project_technologies
create table project_technologies (
  project_id uuid references projects(id) on delete cascade,
  technology_id uuid references technologies(id) on delete cascade,
  primary key (project_id, technology_id)
);

insert into technologies (name) values
('JavaScript'),
('React'),
('TypeScript'),
('Node.js'),
('Express');

insert into projects (
  name,
  repository,
  url,
  description,
  start_date,
  end_date
) values (
  'Project',
  'https://github.com/dsdfd/project',
  'https://project.com/',
  'This is a sample project description. You can add details about the project, your role, and the technologies used.',
  '2019-01-01',
  '2021-01-01'
);

insert into project_technologies (project_id, technology_id)
select
  p.id,
  t.id
from projects p, technologies t
where p.name = 'Project'
and t.name in ('JavaScript', 'React');

--View

create view projects_view as
select
  p.name,
  p.repository,
  p.start_date as "startDate",
  p.end_date as "endDate",
  p.description,
  p.url,
  array_remove(array_agg(t.name), null) as keywords
from projects p
left join project_technologies pt
  on pt.project_id = p.id
left join technologies t
  on t.id = pt.technology_id
group by
  p.id,
  p.name,
  p.repository,
  p.start_date,
  p.end_date,
  p.description,
  p.url;

/*
[
  {
    "name": "Project",
    "repository": "https://github.com/dsdfd/project",
    "startDate": "2019-01-01",
    "endDate": "2021-01-01",
    "description": "This is a sample project description...",
    "url": "https://project.com/",
    "keywords": ["JavaScript", "React"]
  }
]

const { data, error } = await supabase
  .from("projects_view")
  .select("*");
*/