--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.3

-- Started on 2022-11-04 19:18:57 PDT

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 218 (class 1259 OID 59799)
-- Name: beers_brewery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.beers_brewery (
    beers_brewery_id integer NOT NULL,
    brewery_brewery_id integer NOT NULL
);


ALTER TABLE public.beers_brewery OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 59798)
-- Name: beers_brewery_brewery_brewery_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.beers_brewery_brewery_brewery_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.beers_brewery_brewery_brewery_id_seq OWNER TO postgres;

--
-- TOC entry 3593 (class 0 OID 0)
-- Dependencies: 217
-- Name: beers_brewery_brewery_brewery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.beers_brewery_brewery_brewery_id_seq OWNED BY public.beers_brewery.brewery_brewery_id;


--
-- TOC entry 3446 (class 2604 OID 59802)
-- Name: beers_brewery brewery_brewery_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beers_brewery ALTER COLUMN brewery_brewery_id SET DEFAULT nextval('public.beers_brewery_brewery_brewery_id_seq'::regclass);


--
-- TOC entry 3587 (class 0 OID 59799)
-- Dependencies: 218
-- Data for Name: beers_brewery; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.beers_brewery (beers_brewery_id, brewery_brewery_id) FROM stdin;
\.


--
-- TOC entry 3594 (class 0 OID 0)
-- Dependencies: 217
-- Name: beers_brewery_brewery_brewery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.beers_brewery_brewery_brewery_id_seq', 1, false);


-- Completed on 2022-11-04 19:18:57 PDT

--
-- PostgreSQL database dump complete
--

