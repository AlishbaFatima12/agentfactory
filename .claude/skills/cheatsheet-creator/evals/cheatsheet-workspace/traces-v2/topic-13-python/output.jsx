import { useState } from "react";

const palette = {
  bg: "#faf5ef",
  card: "#fff8f0",
  cardBorder: "#e8d5c4",
  accent: "#c0582a",
  accentLight: "#e87a45",
  accentPale: "#f5ddd0",
  dark: "#2c1810",
  mid: "#5a3e2b",
  codeBg: "#2c1810",
  codeText: "#f0dcc8",
  tagBg: "#c0582a",
  tagText: "#fff",
  highlight: "#fff3e6",
};

const Code = ({ children }) => (
  <div
    style={{
      background: palette.codeBg,
      color: palette.codeText,
      borderRadius: 6,
      padding: "8px 11px",
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
      fontSize: 11,
      lineHeight: 1.5,
      overflowX: "auto",
      whiteSpace: "pre",
      marginTop: 6,
    }}
  >
    {children}
  </div>
);

const Tag = ({ children, color }) => (
  <span
    style={{
      display: "inline-block",
      background: color || palette.tagBg,
      color: palette.tagText,
      borderRadius: 4,
      padding: "2px 8px",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: 0.5,
      marginRight: 4,
      marginBottom: 3,
      textTransform: "uppercase",
    }}
  >
    {children}
  </span>
);

const Bullet = ({ children }) => (
  <div
    style={{
      display: "flex",
      gap: 6,
      marginBottom: 3,
      fontSize: 12.5,
      color: palette.mid,
      alignItems: "flex-start",
    }}
  >
    <span style={{ color: palette.accent, fontWeight: 700, marginTop: -1 }}>○</span>
    <span style={{ flex: 1 }}>{children}</span>
  </div>
);

const KV = ({ k, v }) => (
  <div style={{ fontSize: 12, marginBottom: 2, color: palette.mid }}>
    <strong style={{ color: palette.dark }}>{k}</strong> — {v}
  </div>
);

const RefRow = ({ cmd, desc }) => (
  <div
    style={{
      display: "flex",
      borderBottom: `1px solid ${palette.cardBorder}`,
      padding: "4px 0",
      alignItems: "center",
    }}
  >
    <code
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        color: palette.accent,
        fontWeight: 700,
        width: 140,
        flexShrink: 0,
      }}
    >
      {cmd}
    </code>
    <span style={{ fontSize: 11.5, color: palette.mid }}>{desc}</span>
  </div>
);

const SectionCard = ({ number, title, children, span = 1 }) => (
  <div
    style={{
      background: palette.card,
      border: `1.5px solid ${palette.cardBorder}`,
      borderRadius: 10,
      padding: "14px 16px 14px 16px",
      gridColumn: span > 1 ? `span ${span}` : undefined,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 4,
        height: "100%",
        background: palette.accent,
        borderRadius: "10px 0 0 10px",
      }}
    />
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
      <div
        style={{
          background: palette.accent,
          color: "#fff",
          width: 26,
          height: 26,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 900,
          fontSize: 13,
          fontFamily: "'Georgia', serif",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <h3
        style={{
          margin: 0,
          fontSize: 15,
          fontWeight: 800,
          color: palette.dark,
          fontFamily: "'Georgia', serif",
          letterSpacing: -0.3,
        }}
      >
        {title}
      </h3>
    </div>
    {children}
  </div>
);

export default function PythonCheatsheet() {
  const [page, setPage] = useState(0);
  const pages = ["Page 1: Core Language", "Page 2: Intermediate & Advanced"];

  return (
    <div
      style={{
        background: palette.bg,
        minHeight: "100vh",
        fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${palette.codeBg} 0%, #4a2a18 100%)`,
          padding: "22px 28px 16px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "'Georgia', serif",
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: -0.5,
            color: "#fff",
          }}
        >
          Python{" "}
          <span style={{ color: palette.accentLight }}>Cheatsheet</span>
        </h1>
        <div
          style={{
            color: palette.codeText,
            fontSize: 12,
            marginTop: 6,
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Syntax · Data Structures · OOP · Standard Library — 2026 Edition
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 14 }}>
          {pages.map((label, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              style={{
                background: page === i ? palette.accentLight : "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "7px 18px",
                fontSize: 12.5,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Page 1: Core Language */}
      {page === 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* 1 — Why Python */}
          <SectionCard number="1" title="Why Python">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">GENERAL PURPOSE</Tag>
              <Tag color="#5a8a3c">BEGINNER FRIENDLY</Tag>
              <Tag color="#7a5a8a">INTERPRETED</Tag>
            </div>
            <Bullet>Clean, readable syntax with significant whitespace</Bullet>
            <Bullet>Massive ecosystem: 500k+ packages on PyPI</Bullet>
            <Bullet>Dominant in data science, ML, web backends, scripting</Bullet>
            <Bullet>Cross-platform: runs on Windows, macOS, Linux</Bullet>
            <Bullet><strong>Dynamic typing</strong> with optional type hints (PEP 484)</Bullet>
            <Bullet>Active community and long-term CPython support</Bullet>
          </SectionCard>

          {/* 2 — Installation & Setup */}
          <SectionCard number="2" title="Installation & Setup">
            <Code>{`# Check version
python3 --version

# Install via package manager
brew install python       # macOS
sudo apt install python3  # Ubuntu/Debian
winget install Python.Python.3  # Windows

# Create virtual environment
python3 -m venv .venv
source .venv/bin/activate`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="Current Stable" v="Python 3.12+" />
              <KV k="Package Manager" v="pip (bundled with Python 3.4+)" />
              <KV k="REPL" v="python3 or ipython for enhanced shell" />
              <KV k="Style Guide" v="PEP 8 — enforced via black, ruff" />
            </div>
          </SectionCard>

          {/* 3 — Variables & Data Types */}
          <SectionCard number="3" title="Variables & Data Types">
            <Code>{`x = 42            # int
pi = 3.14         # float
name = "Alice"    # str
flag = True       # bool
nothing = None    # NoneType
items = [1, 2, 3] # list
point = (1, 2)    # tuple
info = {"k": "v"} # dict
unique = {1, 2}   # set`}</Code>
            <div style={{ marginTop: 8 }}>
              <KV k="type(x)" v="Returns the type of x" />
              <KV k="isinstance(x, int)" v="Check type with inheritance" />
              <KV k="int() / float() / str()" v="Explicit type casting" />
              <KV k="id(x)" v="Memory address of object" />
            </div>
          </SectionCard>

          {/* 4 — String Operations */}
          <SectionCard number="4" title="String Operations">
            <Code>{`s = "Hello, World!"
s.upper()          # "HELLO, WORLD!"
s.lower()          # "hello, world!"
s.strip()          # trim whitespace
s.split(", ")      # ["Hello", "World!"]
s.replace("o","0") # "Hell0, W0rld!"
s[0:5]             # "Hello" (slicing)
f"Hi {name}!"      # f-string formatting`}</Code>
            <RefRow cmd=".startswith()" desc="Check prefix — returns bool" />
            <RefRow cmd=".endswith()" desc="Check suffix — returns bool" />
            <RefRow cmd=".find(sub)" desc="Index of substring, -1 if missing" />
            <RefRow cmd=".join(iter)" desc="Join iterable with separator string" />
            <RefRow cmd=".format()" desc="Positional/keyword formatting" />
          </SectionCard>

          {/* 5 — Numbers & Math */}
          <SectionCard number="5" title="Numbers & Math">
            <RefRow cmd="+" desc="Addition" />
            <RefRow cmd="-" desc="Subtraction" />
            <RefRow cmd="*" desc="Multiplication" />
            <RefRow cmd="/" desc="True division (returns float)" />
            <RefRow cmd="//" desc="Floor division (integer result)" />
            <RefRow cmd="%" desc="Modulo (remainder)" />
            <RefRow cmd="**" desc="Exponentiation (power)" />
            <Code>{`import math
math.sqrt(16)    # 4.0
math.ceil(3.2)   # 4
math.floor(3.8)  # 3
math.pi          # 3.14159...
abs(-5)          # 5
round(3.567, 2)  # 3.57`}</Code>
          </SectionCard>

          {/* 6 — List Operations */}
          <SectionCard number="6" title="List Operations">
            <Code>{`nums = [3, 1, 4, 1, 5]
nums.append(9)      # add to end
nums.insert(0, 0)   # insert at index
nums.pop()          # remove & return last
nums.remove(1)      # remove first match
nums.sort()         # sort in place
sorted(nums)        # new sorted list
nums[::-1]          # reversed copy`}</Code>
            <RefRow cmd="len(lst)" desc="Number of elements" />
            <RefRow cmd="lst[i]" desc="Access by index (0-based)" />
            <RefRow cmd="lst[-1]" desc="Last element" />
            <RefRow cmd="lst[1:3]" desc="Slice from index 1 to 2" />
            <RefRow cmd="x in lst" desc="Membership test — returns bool" />
          </SectionCard>

          {/* 7 — Dictionary Operations */}
          <SectionCard number="7" title="Dictionary Operations">
            <Code>{`d = {"name": "Alice", "age": 30}
d["name"]           # "Alice"
d.get("email", "?") # "?" (default)
d["city"] = "NYC"   # add/update key
del d["age"]        # remove key
d.keys()            # dict_keys view
d.values()          # dict_values view
d.items()           # key-value pairs`}</Code>
            <RefRow cmd=".update(other)" desc="Merge another dict in place" />
            <RefRow cmd=".pop(key)" desc="Remove key and return value" />
            <RefRow cmd=".setdefault()" desc="Get or set default value" />
            <RefRow cmd="d | other" desc="Merge dicts (Python 3.9+)" />
          </SectionCard>

          {/* 8 — Sets & Tuples */}
          <SectionCard number="8" title="Sets & Tuples">
            <div style={{ fontSize: 12.5, color: palette.mid, marginBottom: 6 }}>
              <strong>Sets</strong> — unordered, unique elements. <strong>Tuples</strong> — ordered, immutable.
            </div>
            <Code>{`# Sets
s = {1, 2, 3}
s.add(4); s.discard(2)
s1 & s2   # intersection
s1 | s2   # union
s1 - s2   # difference

# Tuples
t = (1, "a", True)
x, y, z = t  # unpacking
t[0]          # indexing`}</Code>
            <Bullet><strong>Sets</strong> are ideal for membership tests and deduplication</Bullet>
            <Bullet><strong>Tuples</strong> are hashable — can be dict keys, set members</Bullet>
            <Bullet><code>frozenset()</code> creates an immutable set</Bullet>
            <Bullet>Named tuples via <code>collections.namedtuple</code> or <code>typing.NamedTuple</code></Bullet>
          </SectionCard>

          {/* 9 — Control Flow */}
          <SectionCard number="9" title="Control Flow">
            <Code>{`# if / elif / else
if x > 0:
    print("positive")
elif x == 0:
    print("zero")
else:
    print("negative")

# Ternary expression
result = "yes" if condition else "no"

# Match statement (3.10+)
match command:
    case "quit":
        exit()
    case "hello":
        greet()
    case _:
        unknown()`}</Code>
            <Bullet>Python uses indentation (4 spaces) instead of braces</Bullet>
            <Bullet>Truthy: non-zero, non-empty containers. Falsy: <code>0, "", [], None, False</code></Bullet>
            <Bullet>Chained comparisons: <code>1 {'<'} x {'<'} 10</code></Bullet>
            <Bullet>Logical operators: <code>and</code>, <code>or</code>, <code>not</code></Bullet>
          </SectionCard>

          {/* 10 — Loops & Iteration */}
          <SectionCard number="10" title="Loops & Iteration">
            <Code>{`# For loop
for item in iterable:
    process(item)

# While loop
while condition:
    do_work()

# Useful patterns
for i, val in enumerate(lst):
    print(i, val)
for a, b in zip(list1, list2):
    print(a, b)`}</Code>
            <RefRow cmd="break" desc="Exit the loop immediately" />
            <RefRow cmd="continue" desc="Skip to next iteration" />
            <RefRow cmd="else:" desc="Runs if loop completes without break" />
            <RefRow cmd="range(n)" desc="Sequence 0 to n-1" />
            <RefRow cmd="reversed(seq)" desc="Iterate in reverse order" />
          </SectionCard>

          {/* 11 — Functions */}
          <SectionCard number="11" title="Functions">
            <Code>{`def greet(name, greeting="Hi"):
    """Docstring: describes function."""
    return f"{greeting}, {name}!"

# Keyword & positional args
greet("Alice", greeting="Hello")

# *args and **kwargs
def func(*args, **kwargs):
    print(args)    # tuple
    print(kwargs)  # dict

# Lambda (anonymous function)
square = lambda x: x ** 2`}</Code>
            <KV k="Default args" v="Evaluated once — avoid mutable defaults" />
            <KV k="Return" v="Returns None implicitly if omitted" />
            <KV k="Scope" v="LEGB: Local, Enclosing, Global, Built-in" />
            <KV k="First-class" v="Functions are objects — can be passed around" />
          </SectionCard>

          {/* 12 — Comprehensions & Generators */}
          <SectionCard number="12" title="Comprehensions & Generators">
            <Code>{`# List comprehension
squares = [x**2 for x in range(10)]

# With filter
evens = [x for x in range(20) if x % 2 == 0]

# Dict comprehension
d = {k: v for k, v in pairs}

# Set comprehension
unique = {x.lower() for x in words}

# Generator expression (lazy)
gen = (x**2 for x in range(10))
next(gen)  # yields one value at a time`}</Code>
            <Bullet>List comps create the full list in memory</Bullet>
            <Bullet>Generator expressions are <strong>lazy</strong> — memory efficient for large data</Bullet>
            <Bullet>Nested comprehensions: <code>{'[x for row in matrix for x in row]'}</code></Bullet>
            <Bullet>Use <code>yield</code> in functions to create generator functions</Bullet>
          </SectionCard>
        </div>
      )}

      {/* Page 2: Intermediate & Advanced */}
      {page === 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12,
            padding: "16px 18px",
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          {/* 13 — Classes & OOP */}
          <SectionCard number="13" title="Classes & OOP">
            <Code>{`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} speaks"

class Dog(Animal):
    def speak(self):
        return f"{self.name} barks"

dog = Dog("Rex")
dog.speak()  # "Rex barks"`}</Code>
            <KV k="__init__" v="Constructor — called on instantiation" />
            <KV k="self" v="Reference to the instance (explicit in Python)" />
            <KV k="super()" v="Access parent class methods" />
            <KV k="@property" v="Getter/setter as attribute access" />
            <KV k="@classmethod" v="Method bound to class, not instance" />
            <KV k="@staticmethod" v="No self/cls — plain function in class namespace" />
          </SectionCard>

          {/* 14 — Error Handling */}
          <SectionCard number="14" title="Error Handling">
            <Code>{`try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except (TypeError, ValueError):
    print("Type or value error")
else:
    print("No error occurred")
finally:
    print("Always runs")

# Raise custom exception
class AppError(Exception):
    pass
raise AppError("Something failed")`}</Code>
            <Bullet><code>else</code> block runs only if no exception was raised</Bullet>
            <Bullet><code>finally</code> always runs — ideal for cleanup</Bullet>
            <Bullet>Catch specific exceptions before generic <code>Exception</code></Bullet>
            <Bullet>Use <code>raise ... from e</code> to chain exceptions</Bullet>
          </SectionCard>

          {/* 15 — File I/O */}
          <SectionCard number="15" title="File I/O">
            <Code>{`# Read entire file
with open("file.txt", "r") as f:
    content = f.read()

# Read line by line
with open("file.txt") as f:
    for line in f:
        process(line.strip())

# Write to file
with open("out.txt", "w") as f:
    f.write("Hello\\n")

# JSON
import json
data = json.loads(json_string)
json_out = json.dumps(data, indent=2)`}</Code>
            <RefRow cmd={'"r"'} desc="Read mode (default)" />
            <RefRow cmd={'"w"'} desc="Write mode (truncates file)" />
            <RefRow cmd={'"a"'} desc="Append mode" />
            <RefRow cmd={'"rb" / "wb"'} desc="Binary read/write mode" />
          </SectionCard>

          {/* 16 — Modules & Imports */}
          <SectionCard number="16" title="Modules & Imports">
            <Code>{`# Import patterns
import os
import os.path as osp
from pathlib import Path
from collections import defaultdict, Counter
from typing import List, Optional

# Relative imports (inside packages)
from . import sibling_module
from ..parent import something`}</Code>
            <KV k="__name__" v={'Equals "__main__" when run directly'} />
            <KV k="__init__.py" v="Makes a directory a Python package" />
            <KV k="pip install pkg" v="Install from PyPI" />
            <KV k="pip freeze" v="List installed packages with versions" />
            <Bullet>Use <code>if __name__ == "__main__":</code> to guard script entry points</Bullet>
            <Bullet>Prefer absolute imports for clarity in large projects</Bullet>
          </SectionCard>

          {/* 17 — Standard Library Highlights */}
          <SectionCard number="17" title="Standard Library Highlights">
            <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
              <Tag color="#3a6ea5">OS/SYS</Tag>
              <Tag color="#5a8a3c">DATA</Tag>
              <Tag color="#7a5a8a">TEXT</Tag>
              <Tag color="#8a6a3a">TIME</Tag>
              <Tag color="#2a7a7a">NET</Tag>
            </div>
            <RefRow cmd="os / os.path" desc="File system operations and path handling" />
            <RefRow cmd="pathlib.Path" desc="OOP file paths (modern, preferred)" />
            <RefRow cmd="sys" desc="System-specific params, argv, exit" />
            <RefRow cmd="json" desc="JSON encoding and decoding" />
            <RefRow cmd="datetime" desc="Date, time, and timedelta objects" />
            <RefRow cmd="re" desc="Regular expressions" />
            <RefRow cmd="collections" desc="Counter, defaultdict, deque, namedtuple" />
            <RefRow cmd="itertools" desc="Combinatoric & efficient iterators" />
            <RefRow cmd="functools" desc="lru_cache, partial, reduce" />
            <RefRow cmd="subprocess" desc="Run external commands" />
          </SectionCard>

          {/* 18 — Decorators & Context Managers */}
          <SectionCard number="18" title="Decorators & Context Managers">
            <Code>{`# Decorator
def log_call(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        return func(*args, **kwargs)
    return wrapper

@log_call
def add(a, b):
    return a + b

# Context manager
from contextlib import contextmanager

@contextmanager
def timer():
    import time
    start = time.time()
    yield
    print(f"Took {time.time()-start:.2f}s")`}</Code>
            <Bullet>Use <code>@functools.wraps(func)</code> to preserve function metadata</Bullet>
            <Bullet>Decorators can be stacked: order is bottom-up execution</Bullet>
            <Bullet><code>__enter__</code> / <code>__exit__</code> for class-based context managers</Bullet>
            <Bullet>Common decorators: <code>@property</code>, <code>@staticmethod</code>, <code>@lru_cache</code></Bullet>
          </SectionCard>

          {/* 19 — Type Hints */}
          <SectionCard number="19" title="Type Hints">
            <Code>{`from typing import Optional, Union

def greet(name: str) -> str:
    return f"Hello, {name}"

age: int = 25
scores: list[int] = [90, 85, 92]
config: dict[str, str] = {}

def find(id: int) -> Optional[str]:
    ...

# Python 3.10+ union syntax
def parse(val: int | str) -> None:
    ...`}</Code>
            <KV k="mypy" v="Static type checker — run before CI" />
            <KV k="Optional[X]" v="Equivalent to X | None" />
            <KV k="TypeVar" v="Generic type variables for parameterized types" />
            <KV k="Protocol" v="Structural subtyping (duck typing with types)" />
          </SectionCard>

          {/* 20 — Common Patterns & Idioms */}
          <SectionCard number="20" title="Common Patterns & Idioms">
            <Code>{`# Swap variables
a, b = b, a

# Unpack with *rest
first, *rest = [1, 2, 3, 4]

# Dictionary merge
merged = {**d1, **d2}

# Conditional assignment
x = val if val is not None else default

# Walrus operator (3.8+)
if (n := len(data)) > 10:
    print(f"Large: {n}")`}</Code>
            <Bullet><code>any()</code> / <code>all()</code> — test iterables for truthiness</Bullet>
            <Bullet><code>map(fn, iter)</code> — apply function to each element</Bullet>
            <Bullet><code>filter(fn, iter)</code> — keep elements where fn returns True</Bullet>
            <Bullet><code>sorted(iter, key=fn)</code> — sort with custom key function</Bullet>
          </SectionCard>

          {/* 21 — Virtual Environments & Packaging */}
          <SectionCard number="21" title="Virtual Environments & Packaging">
            <Code>{`# Create and activate venv
python3 -m venv .venv
source .venv/bin/activate   # macOS/Linux
.venv\\Scripts\\activate      # Windows
deactivate                  # exit venv

# Requirements
pip install -r requirements.txt
pip freeze > requirements.txt`}</Code>
            <RefRow cmd="pip install pkg" desc="Install a package" />
            <RefRow cmd="pip uninstall pkg" desc="Remove a package" />
            <RefRow cmd="pip list" desc="Show installed packages" />
            <RefRow cmd="pip show pkg" desc="Package info and location" />
            <Bullet><strong>uv</strong> — ultra-fast pip replacement (Rust-based)</Bullet>
            <Bullet><strong>pyproject.toml</strong> — modern project metadata standard (PEP 621)</Bullet>
          </SectionCard>

          {/* 22 — Debugging & Testing */}
          <SectionCard number="22" title="Debugging & Testing">
            <Code>{`# Quick debug
breakpoint()  # drops into pdb

# pytest (install: pip install pytest)
def test_add():
    assert add(2, 3) == 5

# Run tests
# pytest -v
# pytest -k "test_add"
# pytest --cov=mymodule`}</Code>
            <RefRow cmd="breakpoint()" desc="Built-in debugger entry (Python 3.7+)" />
            <RefRow cmd="pdb.set_trace()" desc="Legacy debugger entry point" />
            <RefRow cmd="pytest -v" desc="Verbose test output" />
            <RefRow cmd="pytest --cov" desc="Test coverage report" />
            <Bullet>Use <code>pytest.raises(ExcType)</code> to assert exceptions</Bullet>
            <Bullet>Fixtures with <code>@pytest.fixture</code> for shared test setup</Bullet>
          </SectionCard>

          {/* 23 — Performance Tips */}
          <SectionCard number="23" title="Performance Tips">
            <Bullet>Use <strong>list comprehensions</strong> over manual for-loop appends</Bullet>
            <Bullet>Use <code>set</code> for O(1) membership tests instead of <code>list</code></Bullet>
            <Bullet><code>collections.deque</code> for O(1) append/pop from both ends</Bullet>
            <Bullet>Cache expensive calls with <code>@functools.lru_cache</code></Bullet>
            <Bullet>Avoid string concatenation in loops — use <code>"".join(parts)</code></Bullet>
            <Bullet>Use <strong>generators</strong> for large datasets to reduce memory usage</Bullet>
            <Code>{`# Profiling
import cProfile
cProfile.run("my_function()")

# Timing
import timeit
timeit.timeit("sum(range(100))", number=10000)`}</Code>
          </SectionCard>

          {/* 24 — Python Ecosystem Decision Guide */}
          <SectionCard number="24" title="When to Use What" span={3}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
              {[
                { title: "Web Backend", when: "APIs, web apps, microservices", best: "Django, FastAPI, Flask", tag: "WEB", color: "#3a6ea5" },
                { title: "Data Science", when: "Analysis, visualization, notebooks", best: "pandas, numpy, matplotlib, jupyter", tag: "DATA", color: "#5a8a3c" },
                { title: "Machine Learning", when: "Models, training, inference", best: "scikit-learn, PyTorch, TensorFlow", tag: "ML", color: "#7a5a8a" },
                { title: "Automation", when: "Scripts, CLI tools, DevOps", best: "click, typer, fabric, invoke", tag: "OPS", color: "#8a6a3a" },
                { title: "Testing", when: "Unit, integration, E2E tests", best: "pytest, hypothesis, tox", tag: "QA", color: "#a53a3a" },
                { title: "Async / Concurrency", when: "I/O-bound, high-concurrency", best: "asyncio, aiohttp, uvicorn", tag: "ASYNC", color: "#2a7a7a" },
                { title: "Packaging", when: "Distributing libraries or apps", best: "setuptools, hatch, poetry, uv", tag: "PKG", color: "#8a6a3a" },
                { title: "Type Safety", when: "Large codebases, team projects", best: "mypy, pyright, pydantic", tag: "TYPES", color: "#3a6ea5" },
              ].map(({ title, when, best, tag, color }) => (
                <div
                  key={title}
                  style={{
                    background: palette.highlight,
                    borderRadius: 8,
                    padding: "10px 12px",
                    border: `1px solid ${palette.cardBorder}`,
                  }}
                >
                  <Tag color={color}>{tag}</Tag>
                  <div style={{ fontSize: 12.5, fontWeight: 800, color: palette.dark, marginTop: 4 }}>{title}</div>
                  <div style={{ fontSize: 10.5, color: palette.accent, fontWeight: 600, marginTop: 2 }}>{when}</div>
                  <div style={{ fontSize: 10.5, color: palette.mid, marginTop: 3 }}>{best}</div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "14px 0 18px",
          fontSize: 12,
          color: palette.mid,
          fontFamily: "'Georgia', serif",
        }}
      >
        Python Cheatsheet — Created {new Date().getFullYear()}
        <br />
        <span style={{ fontSize: 10.5, color: "#a08a76" }}>
          Covers Python 3.10+ · Based on official Python documentation
        </span>
      </div>
    </div>
  );
}
